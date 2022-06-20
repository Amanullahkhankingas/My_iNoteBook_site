const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



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

    let JWT_Secret = "kolar is vary bad boy"

    try {
    let salt = await bcrypt.genSalt(10)
    let secPass = await bcrypt.hash(req.body.password,salt)

   



    //check weather the user with this email exists already
    let user = await User.findOne({email:req.body.email});

    // console.log(user) //just for checking is user exist in database or not

    if(user){
      return  res.status(404).json({error:"Sorry this email is already in use you can not use its"})
    };

        user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass

    })

    let Udata = {
        user:{
            // id:findOne({id:user.id}) //wrong way to call data of the user because there will be assign all the user data to the user then we take id form him in simple way just to assign this id to another variable .
            id:user.id
        }
    }

    let userToken = jwt.sign(Udata,JWT_Secret);
    // console.log(userToken)
    res.json(userToken)
    
    // .then(user => res.json(user))
    // .catch(err =>{console.log(err)
    // res.json({error:'Please enter a unique value for email' , message:err.message})
    // })
    
    // res.json(user)
    

} catch (error) {

    console.error(error.message)
    res.status(500).send("internal error accur ")
        
}


 });


 // authentication a user using : POST '/api/auth' login.login doesn't require 
router.post('/login' ,[
   
    body('email', 'Enter  a valid email').exists(),
    body('password' , 'Password must be atleast 5 charactor').isLength({min:5})],
    async (req, res) =>{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {password, email} = req.body;

        try {

        let user = await User.findOne({email});
        // console.log(user)

        // let kolar = await User.findOne({"name":"kill"})
        // console.log(kolar)

        if(!user){
            return res.status(404).json({error:"Please try to login with correct email"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        // console.log(passwordCompare)
        if(!passwordCompare){
            return res.status(404).json({error:"Please enter the correct password"});

        }

        let JWT_Secret = "kolar is vary bad boy"

        let Udata = {
            user:{
                // id:findOne({id:user.id}) //wrong way to call data of the user because there will be assign all the user data to the user then we take id form him in simple way just to assign this id to another variable .
                id:user.id
            }
        }
    

        let userToken = jwt.sign(Udata,JWT_Secret);
        // console.log(userToken)
        res.json("hellow this is me")
        
            
        } catch (error) {

            console.error(error.message)
            res.status(500).send("internal error occured")
            
        }


    })


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