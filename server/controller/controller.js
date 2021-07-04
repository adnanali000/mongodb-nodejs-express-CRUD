var Userdb = require('../modal/model');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(404).send({message:"content cannot be empty"});
        return
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save use in the database
    user.save(user).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:err.message || "some error occur during create operation"});
    });

}

//retrieve and return all user / retrieve and return single user
exports.find = (req,res)=>{

}

//update user by user id
exports.update = (req,res)=>{

}

//delete a user with specific id
exports.delete = (req,res)=>{

}