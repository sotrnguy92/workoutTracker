const express = require('express');


const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json);

app.use(express.static("public"));

app.listen(() => {
    console.log(`app is running on port ${PORT} `);
});
