import {  useState , useEffect } from "react"
import { getUser } from "../services/api"
import { useNavigate  } from "react-router-dom"
const loginStyle = {textAlign:'center' , 
margin:'50px auto 0 auto' , 
width:'50%',
borderRadius: '50px',
background: '#f7e0ca',
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
const Login = ({setUserDetails }) => {
    const [logindata  , setloginData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const value = localStorage.getItem('login')
        if(value === 'true'){
            navigate('/home')
        }else{
            navigate('/login')
        }
    },[])
    const onFormSubmit = async(e) => {
       try {
          e.preventDefault()
          const res = await getUser(logindata)
          window.alert(res.data.message)
          if(res.data.message  === 'Login SuccessFull'){
            localStorage.setItem('login' , 'true')
            localStorage.setItem('name' , res.data.user.name)
            setUserDetails(res.data.user)
            navigate('/home')
          }

       } catch (error) {
        console.log(error)
       }
    }
    const onInputchange = (e) => {
        setloginData({
            ...logindata , 
            [e.target.name] : e.target.value
        })
        console.log(logindata)
    }
    return (<>
    
                   
                    <div style={loginStyle}>
                        <h1>Login</h1>
                        <form method="POST" onSubmit={onFormSubmit}>
                            <div className="name">
                                <input type="text" name="email" style={inputStyle} placeholder="Enter Email Id.." onChange={onInputchange}/>

                            </div>
                            <div className="name">
                                <input type="number" name="password" style={inputStyle} placeholder="Enter Password.." onChange={onInputchange}/>
                                
                            </div>
                            <div className="name">
                                <input type="submit" name="email" style={buttonStyle} value='Login'/>
                                
                            </div>
                        </form>
                </div>
                   
           
    </>)
}
export default Login