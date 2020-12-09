const express = require('express');
const logger = require("morgan");
const PORT = 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));


app.listen(PORT,() => {
    console.log(`app is running on port ${PORT} `);
});
