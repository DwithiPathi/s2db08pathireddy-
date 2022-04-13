var Ballon = require('../models/ballon'); 
 
// List of all Costumes 
exports.ballon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon list'); 
}; 
 
// for a specific Ballon. 
exports.ballon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.ballon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.ballon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.ballon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon update PUT' + req.params.id); 
}; 