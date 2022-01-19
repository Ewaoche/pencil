const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
// const SubjectCategory = require('../models/Category');
const Biological = require('../models/biology');
const Topic = require('../models/topic');






const getBiologyQuestions = asyncHandler(async(req, res, next) => {

 
// console.log(req.query);
// const {q} = req.query

// const Biologicaldata = await Biological.find({annotations:q});
const Biologicaldata = await Topic.find({"parent":"Cell Structure and Organisation"});

console.log(Biologicaldata)
  const questionNumbers = Biologicaldata.map( data => data._id);
    if (questionNumbers) {
        res.status(200).json({
            message: ' Biological questionNumbers was retrieved successfully',
            questionNumbers
        });
    }
});






module.exports = {

    getBiologyQuestions
}