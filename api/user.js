const express = require("express");
const router = express.Router();

router.get("/api/user", (req,res)=>{
    res.json({message:"Hello from /user"})
});

module.exports = router;