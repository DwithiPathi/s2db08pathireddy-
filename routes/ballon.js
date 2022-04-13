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

// /* GET detail ballon page */
// router.get('/detail', ballon_controlers.ballon_view_one_Page);

// /* GET create ballon page */
// router.get('/create',secured, ballon_controlers.ballon_create_Page);

// /* GET update ballon page */
// router.get('/update',secured,ballon_controlers.ballon_update_Page);

// /* GET create ballon page */
// router.get('/delete', secured,ballon_controlers.ballon_delete_Page);

