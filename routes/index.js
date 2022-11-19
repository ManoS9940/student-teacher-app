var express = require('express');
var router = express.Router();
var {dbUrl,mongodb,MongoClient} = require('../dbConfig')
var {studentModel,mongoose} = require ('../dbSchema');
var client = new MongoClient(dbUrl);
mongoose.connect(dbUrl);


router.get('/students', async (req, res,)=> {
  try {
    let users = await studentModel.find()
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

router.put('/students/:id', async function(req, res, next) {
  try{
      let req = await studentModel.updateOne({ _id: mongodb.ObjectId(req.params.id) },req.body);
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

//Adding student 
router.post('/add-student',async (req,res)=>{
  try {
    let users = await studentModel.create(req.body);
    res.send({
      statusCode:200,
      message:"student created Successfully!",
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


//Deleting student 
router.delete('/students/:id', async function(req, res, next) {
  try{
      let req = await studentModel.deleteOne({ _id: mongodb.ObjectId(req.params.id) });
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
