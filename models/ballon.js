const mongoose = require("mongoose") 
const ballonSchema = mongoose.Schema({ 
 ballon_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Ballon", 
ballonSchema) 