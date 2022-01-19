const mongoose = require('mongoose');




TopicSchma = new mongoose.Schema({


    _id: {
        type:  String,
        required: [true, 'please add id']
    },

    parent:{
        type:  String,
    }

  
  

   
});

module.exports = mongoose.model('topic', TopicSchma);