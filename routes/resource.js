var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ballon_controller = require('../controllers/ballon');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a ballon.
router.post('/ballon', ballon_controller.ballon_create_post);
// DELETE request to delete ballon.
router.delete('/ballon/:id', ballon_controller.ballon_delete);
// PUT request to update ballon.
router.put('/ballon/:id', ballon_controller.ballon_update_put);
// GET request for one ballon.
router.get('/ballon/:id', ballon_controller.ballon_detail);
// GET request for list of all ballon.
router.get('/ballon', ballon_controller.ballon_list);
module.exports = router;