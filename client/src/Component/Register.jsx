import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api"
const registerStyle = {
    textAlign:'center' , 
    margin:'50px auto 0 auto' ,
     width:'50%',
     borderRadius: '50px',
background: '#e0e0e0',
boxShadow:  "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
height:'400px',
padding:'30px',
minWidth:'250px',
minHeight:'400px'
    
    }
    const inputStyle = {
        width:'75%',
        background:'none',
        border:'none',
        borderBottom:'1px solid black',
        margin:'10px',
        outline:'none'
    }
    const buttonStyle = {
        width:'75%',
        background:'#2B3044',
        border:'none',
        borderBottom:'1px solid black',
        margin:'10px',
        outline:'none',
        fontSize:' 16px',
        fontWeight: '700',
        boxShadow: '0px 1px 2px #2B3044,0px 4px 16px #2B3044',
        borderRadius: '9px',
        color: '#fff',
        lineHeight: '24px'
    }
const Register = () => {
    const [data , setData] = useState({})
    const navigate = useNavigate()
    const  onFormSubmit = async(e) => {
        try {
            e.preventDefault()
            const res = await addUser(data)
            window.alert(res.data.message)
            if(res.data.message === 'Register Successfull'){
                navigate('/login')
            } 
        } catch (error) {
            console.log("Error")
        }



    }
    const onInputchange = (e) => {
          setData({
            ...data , 
            [e.target.name]:e.target.value
          })
          console.log(data)
    }
    return (<>

    <div style={registerStyle}>
        <h1>Registration Form</h1>
        <form method="POST" onSubmit={onFormSubmit}>
            <div className="name">
                <input type="text" name="name" style={inputStyle} placeholder="Enter Your Name" onChange={onInputchange}/>

            </div>
            <div className="name">
                <input type="number" name="phone" style={inputStyle} placeholder="Enter Your Phone Number" onChange={onInputchange}/>
                
            </div>
            <div className="name">
                <input type="text" name="email" style={inputStyle} placeholder="Enter your Email Id" onChange={onInputchange} />
                
            </div>
            <div className="name">
                <input type="text" name="password" style={inputStyle} placeholder="Enter Password" onChange={onInputchange} />
                
            </div>
            <div className="name">
                <input type="text" name="cpassword" style={inputStyle } placeholder="Confirm Password" onChange={onInputchange}/>
                
            </div>
            <div className="name">
                <input type="submit" value="Register" style={buttonStyle }   />
            </div>

        </form>
    </div>
    </>)
}
export default Register