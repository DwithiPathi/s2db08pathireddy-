var ballon = require('../models/ballon')
// List of all ballon
exports.ballon_list = async function (req, res) {
    // List of all ballon
    res.send('NOT IMPLEMENTED: ballon list');
};
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
// for a specific ballon.
exports.ballon_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await ballon.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Handbag create on POST.
exports.ballon_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ballon();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimensions":"Stylish", "Color":"Violet", "Price":1500}
    document.ballon_type = req.body.ballon_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
            console.log(err)
            res.send({"name":err.name,"message":err.message})
            res.send(err)
            res.status(500);
        //res.error(500,`{"error": ${err}}`);
        }
    };
// Handle ballon delete on DELETE.
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

// Handle ballon update form on PUT.
//Handle ballon update form on PUT.
exports.ballon_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ballon.findById( req.params.id)
        // Do updates of properties
        if(req.body.Dimensions) toUpdate.Dimensions = req.body.Dimensions;
        if(req.body.Color) toUpdate.Color = req.body.Color;
        if(req.body.Price) toUpdate.Price = req.body.Price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.ballon_view_all_Page = async function(req, res) {
    try{
    theballon = await ballon.find();
    res.render('ballon', { title: 'ballon Search Results', results: theballon });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
    // for a specific Costume. 
    exports.ballon_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await ballon.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
    }; 