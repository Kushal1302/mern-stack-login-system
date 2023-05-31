const express = require('express')
const router = express.Router()
const User = require('../models/schema')

router.post('/register' , async (req , res) => {
    try {
        const {name , phone , email , password , cpassword} = req.body
        if(!name || !phone || !email || !password || !cpassword){
            return res.status(400).json("Form pura bharo")
        }else{
            const checkData = await User.findOne({email:email})
           
            if(checkData != null){
                return res.status(300).json({error:"Email Already Exists"})

            }else{
                if(password === cpassword){
                    const postData = await new User(req.body)
                    await postData.save()
                    return res.status(200).json(postData)
                    console.log("Data Successfully Inserted")
                }else{
                    return res.status(500).json({error:"both are Diffrent Password"})
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
            return res.status(400).json({error:"Form Pura bharo"})
        }else{
            const checkData = await User.findOne({email:email , password:password})
            if(checkData != null){
               return res.status(200).json(checkData.name)
            }else{
                return res.status(400).json({error:"Invalid Credentials or Email Not Registered"})
            }
        }
        
    } catch (error) {
        console.log("Error while login" , error.message)
    }
})




module.exports = router