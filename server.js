const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workoutTracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(express.static("public"));

app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));


app.listen(PORT,() => console.log(`app is running on port ${PORT} `));
