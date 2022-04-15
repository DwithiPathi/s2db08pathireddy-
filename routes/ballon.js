var express = require('express');
var router = express.Router();
const ballon_controlers= require('../controllers/ballon');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET ballon */
router.get('/', ballon_controlers.ballon_view_all_Page );
module.exports = router;

// GET request for one costume. 
router.get('/ballon/:id', ballon_controlers.ballon_detail); 


