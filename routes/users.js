var express = require('express');
var router = express.Router();
var {dbUrl,mongodb,MongoClient} = require('../dbConfig')
var {teacherModel,mongoose} = require ('../dbSchema');
var client = new MongoClient(dbUrl);
mongoose.connect(dbUrl)

//get teachers list_collections
router.get('/teacher', async (req, res,)=> {
  try {
    let users = await teacherModel.find()
    res.send({
      statusCode:200,
      users
    })
  } catch (error) {
    console.log(error)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
});

router.put('/teacher/:id', async function(req, res, next) {
  try{
      let req = await teacherModel.updateOne({ _id: mongodb.ObjectId(req.params.id) },req.body);
      res.send({
        statusCode:200,
        data:req
      })
  }
  catch(error){
    res.send({
      statusCode:500,
      message:"Interal error"
    })
  }
});

//Adding teacher 
router.post('/add-teacher',async (req,res)=>{
  try {
    let users = await teacherModel.create(req.body);
    res.send({
      statusCode:200,
      message:"teacher created Successfully!",
      users
    })
  } catch (error) {
      console.log(error)
      res.send({
        statusCode:500,
        message:"Internal server error"
      })
  }
})

//Deleting teacher 
router.delete('/teacher/:id', async function(req, res, next) {
  try{
      let req = await teacherModel.deleteOne({ _id: mongodb.ObjectId(req.params.id) });
      res.send({
        statusCode:200,
        data:req
      })
  }
  catch(error){
    res.send({
      statusCode:500,
      message:error
    })
  }
});



module.exports = router;
