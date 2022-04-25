const mongoose = require("mongoose")
const ballonSchema = mongoose.Schema({
    ballon_type: {
        type: String,
        required: [true, "ballon_type are required"]
    },
    size: {
        type: String,
        required: [true, "size is Required"]
    },
    cost: {
        type: Number,
        required: [true,"cost of the ballon is required"],
        min:[3000,"cost Should be minimum of 3000$ "],
        max:[6000,"cost Cannot be greater than 6000$ "]


    }

})

module.exports = mongoose.model("ballon", ballonSchema)