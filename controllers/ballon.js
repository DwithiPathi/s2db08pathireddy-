var ballon = require('../models/ballon');
// List of all ballon
exports.ballon_list = async function(req, res) {
    try{
    theballon = await ballon.find();
    res.send(theballon);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
// Handle ballon create on POST.
exports.ballon_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ballon();
    document.ballon_type = req.body.ballon_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle ballon delete form on DELETE.
// exports.ballon_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: ballon delete DELETE ' + req.params.id);
// };
// // Handle ballon update form on PUT.
// exports.ballon_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: ballon update PUT' + req.params.id);
// };
// VIEWS
// Handle a show all view
exports.ballon_view_all_Page = async function(req, res) {
    try{
    theballon = await ballon.find();
    res.render('ballon', { title: 'ballon Search Results', results: theballon });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific ballon
exports.ballon_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await ballon.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle ballon update form on PUT.
exports.ballon_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await ballon.findById( req.params.id)
 // Do updates of properties
 if(req.body.ballon_type)
 toUpdate.ballon_type = req.body.ballon_type;
 if(req.body.size) toUpdate.size = req.body.size;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// Handle Ballon delete on DELETE. 
exports.ballon_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await ballon.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.ballon_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await ballon.findById( req.query.id) 
        res.render('ballondetail',  
{ title: 'ballon Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.ballon_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('balloncreate', { title: 'ballon Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.ballon_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await ballon.findById(req.query.id) 
        res.render('ballonupdate', { title: 'ballon Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.ballon_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await ballon.findById(req.query.id) 
        res.render('ballondelete', { title: 'ballon Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 