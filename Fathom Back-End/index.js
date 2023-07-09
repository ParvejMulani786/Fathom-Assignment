const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const server = express();
//create middlewares
server.use(express.json())
server.use(express.urlencoded())

server.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/fathomapp",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},).then(() => console.log("connected successfully"))
.catch((err) => {console.error(err);});


const userSchema = new mongoose.Schema({
    name:String,
    contact:Number,
    address:String,
    pincode:Number,
    occupation:String,
    username:String,
    password:String

})

//create model to generate users object and save it in mongodb
const User = new mongoose.model("User", userSchema )
// module.exports = User

//routes
// server.get("/", (req, res) =>{
//     res.send("APi")
// } 

server.post("/login", (req, res)=> {
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Successfully Login !!", user: user})
            } else {
                res.send({ message: "Wrong password !!"})
            }
        } else {
            res.send({message: "Please complete Registration first"})
        }
    })
})

server.post('/register', (req,res) =>{
    const { name, contact, address, pincode, occupation, username, password } = req.body
    
    //check if user is already exist using findOne() of mongoose
    User.findOne({username: username}, (err, user) => {
        if(user){
            res.send({message: "User already exist"})
        } else {
            const user = new User({
                name,
                contact,
                address,
                pincode,
                occupation,
                username,
                password 
            })
            user.save(err => {
                if(err) {
                // switch (err.name) {
                    
                    // case 'CastError':
                    //   res.status(400); // Bad Request
                    //   return res.send('400');
                    // default:
                    //   res.status(500); // Internal server error
                    //   return res.send('500');
                if(err) {
                     
                     res.send({ message: "Invalid credentials !! Please enter valid Input" })
                     
                    
                } }else {
                    res.send( { message: "Successfully Registration Done !!" })

                }
            })
        }
    })
    
})


server.listen( 8080 ,()=>{
    console.log("sever started at port 8080")
})

               