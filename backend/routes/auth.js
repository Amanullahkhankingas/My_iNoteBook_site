const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');



// create a user using : POST '/api/auth' createUser.login doesn't require 
router.post('/createUser' ,[
    body('name','Name must be atleast 3 charactor').isLength({min:3}),
    body('email', 'Enter  a valid email').isEmail(),
    body('password' , 'Password must be atleast 5 charactor').isLength({min:5})],
    async (req, res) =>{
    // obj ={
    //     a: 'aman', 
    //     number:3453

    // },
    // res.json(obj)

    // res.json([])

    // console.log(req.body)
    // res.send(req.body)
    // // res.send('auth response')

    // user = User(req.body)
    // user.save()

    //find the validation errors in this request and wraps them in an object with handy functions

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        
    

    //check weather the user with this email exists already
    let user = await User.findOne({email:req.body.email});

    console.log(user) //just for checking is user exist in database or not

    if(user){
      return  res.status(404).json({error:"Sorry this email is already in use you can not use its"})
    }

        user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,

    })
    
    // .then(user => res.json(user))
    // .catch(err =>{console.log(err)
    // res.json({error:'Please enter a unique value for email' , message:err.message})
    // })
    
    res.json(user)

} catch (error) {

    console.error(error.message)
    res.status(500).send("Some error is occured")
        
}


 });


// router.post('/' ,[
//     body('name','Name must be atleast 3 charactor').isLength({min:3}),
//     body('email', 'Enter  a valid email').isEmail(),
//     body('password' , 'Password must be atleast 5 charactor').isLength({min:5})],
//      (req, res) =>{
//     // obj ={
//     //     a: 'aman', 
//     //     number:3453

//     // },
//     // res.json(obj)

//     // res.json([])

//     // console.log(req.body)
//     // res.send(req.body)
//     // // res.send('auth response')

//     // user = User(req.body)
//     // user.save()

//     //find the validation errors in this request and wraps them in an object with handy functions

//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()});
//     }

//     User.create({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,

//     }).then(user => res.json(user))
//     .catch(err =>{console.log(err)
//     res.json({error:'Please enter a unique value for email' , message:err.message})
//     })



//  });

module.exports = router