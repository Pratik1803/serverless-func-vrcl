const express = require("express");
const router = express.Router();

router.get("/api/kanji", (req,res)=>{
    res.json({message:"Hello from /kanji"})
});

module.exports = router;