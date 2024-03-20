const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
    company:{
        type:String,
    },
    
    ticker:{
        type:String
    },

    revenue:{
        type:Number
    },

    gp:{
        type:Number
    },

    fcf:{
        type:Number
    },

    capex:{
        type:Number
    }
});

const value = mongoose.model("Value",businessSchema);
module.exports = value;