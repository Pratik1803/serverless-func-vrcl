const express = require("express");
const app = express();
const kanjiRoute = require('./kanji');
const userRoute = require("./user");
const PORT = process.env.PORT || 8000;

app.use(kanjiRoute);
app.use(userRoute);

app.get("*", (req,res)=>{
    res.json({message:"Hello from /"});
});

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}...`);
});