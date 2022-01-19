const mongoose = require('mongoose');




BiologicalSchma = new mongoose.Schema({


    _id: {
        type:  Number,
        required: [true, 'please add id']
    },

    annotations:{
        type:  Array,
    }

  
  

   
});

module.exports = mongoose.model('questions', BiologicalSchma);