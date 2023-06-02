// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
let name = ""
const Home = () =>{
    const navigate = useNavigate()
    useEffect(  () => {
        const value = localStorage.getItem('login')
        name = localStorage.getItem('name')
        if(value === 'true'){
            navigate('/home')
        }else{
            navigate('/login')
        }
        

    } , [])
    const forLogout = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('name')
        navigate('/login')
    }
    
    return (<>
    
    <div className="container my-5">
        <div className="row">
            <div className="col-10  mx-auto">
                <h1 style={{textAlign:'center'}}>Welcome Back ! {name}</h1>
                <div className="d-flex justify-content-center">
                <button  onClick={forLogout} className="btn btn-primary">Logout</button>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Home