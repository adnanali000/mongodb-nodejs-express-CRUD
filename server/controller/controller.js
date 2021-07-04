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
    //get single user from DB
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found user with id= "+id})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:"error retrivin user with id= "+id});
        })

    }else{
        Userdb.find().then(user=>{
            res.send(user)
        }).catch(err=>{
            res.status(500).send({message:err.message || "Error occured while retriving user data"});
        })
    }

   
}



//update user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id}.Maybe user not found`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:"Error update user information"})
    })

}

//delete a user with specific id
exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with ${id}.Maybe wrong id`})
        }else{
            res.send({message:"User was deleted successfully"});
        }
    }).catch(err=>{
        res.status(500).send({message:"could not delete user with id= "+id});
    });
}

