var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post("/login",function(req,res,next){
    print(req.body)
})
module.exports = router;