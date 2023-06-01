const express = require('express')
const router = express.Router()
const User = require('../models/schema')

router.post('/register' , async (req , res) => {
    try {
        const {name , phone , email , password , cpassword} = req.body
        if(!name || !phone || !email || !password || !cpassword){
            return res.send({message:"Fill Complete Form"})
        }else{
            const checkData = await User.findOne({email:email})
           
            if(checkData != null){
                return res.send({message:"Email Already exists"})

            }else{
                if(password === cpassword){
                    const postData = await new User(req.body)
                    await postData.save()
                    return res.send({message:"Register Successfull"})
                    console.log("Data Successfully Inserted")
                }else{
                    return res.send({message:"Enter Same Password"})
                }
            }
            
        }
    } catch (error) {
        console.log("Error While Posting Data" , error.message)
    }
})
router.post('/login' , async(req , res) => {
    try {
        const {email , password} = req.body
        if(!email || !password){
            return res.send({message:"Fill Complete Form"})
        }else{
            const checkData = await User.findOne({email:email , password:password})
            if(checkData != null){
               return res.send({message:"Login SuccessFull" , user:checkData})
            }else{
                return res.send({message:"Invalid Credentials or Email Not Registered"})
            }
        }
        
    } catch (error) {
        console.log("Error while login" , error.message)
    }
})




module.exports = router