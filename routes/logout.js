const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const User = require('../schemas/UserSchema');
//password hash작업하기
const bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({ extended:false}));



//get(1,2,3) -> 1,2,3... 순서대로 execute
router.get("/", (req, res, next)=>{//it means that / is equal views, top level 
   
    if(req.session){
        req.session.destroy(()=>{
            res.redirect("/login");
        })
    }
})



module.exports = router;