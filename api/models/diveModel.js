'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiveSchema = new Schema({

    title:{
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    location_lat: {
        type: Number
    },
    location_lng: {
        type: Number
    },
    location_zoom:{
        type: Number
    }

});

module.exports = mongoose.model('Dives',  DiveSchema);