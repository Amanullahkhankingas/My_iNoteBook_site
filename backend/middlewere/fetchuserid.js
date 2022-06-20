var jwt = require('jsonwebtoken');

const fetchuserid =(req, res, next)=>{
//get the user id from the jwt token and add id to req 

const token = req.header('auth-token')
if(!token){
    res.status(401).send({error: "Please authenticate using a valid token"})
}
try {

    let JWT_Secret = "kolar is vary bad boy"
    const data = jwt.verify(token, JWT_Secret)
    req.user = data.user

} catch (error) {
    res.status(401).send({error: "Please authenticate using a valid token"})
    
}


next()

}

module.exports = fetchuserid


