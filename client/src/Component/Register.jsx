import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api"

const Register = () => {
    const [data , setData] = useState({})
    const navigate = useNavigate()
    const  onFormSubmit = async(e) => {
        try {
            e.preventDefault()
            const res = await addUser(data)

            console.log(res.json())
            if(res === 'undefined'){
                window.alert("Error")
            }else{
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

    <div style={{textAlign:'center' , margin:'50px auto 0 auto' , width:'50%'}}>
        <h1>Registration Form</h1>
        <form method="POST" onSubmit={onFormSubmit}>
            <div className="name">
                <input type="text" name="name" style={{width:'100%'}} onChange={onInputchange}/>

            </div>
            <div className="name">
                <input type="number" name="phone" style={{width:'100%'}} onChange={onInputchange}/>
                
            </div>
            <div className="name">
                <input type="text" name="email" style={{width:'100%'}} onChange={onInputchange} />
                
            </div>
            <div className="name">
                <input type="text" name="password" style={{width:'100%'}} onChange={onInputchange} />
                
            </div>
            <div className="name">
                <input type="text" name="cpassword" style={{width:'100%'}} onChange={onInputchange}/>
                
            </div>
            <div className="name">
                <input type="submit" value="Register" style={{width:'100%'}}   />
            </div>

        </form>
    </div>
    </>)
}
export default Register