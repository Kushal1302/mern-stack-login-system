// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate = useNavigate()
    window.onload = () => {
        const value = localStorage.getItem('login')
        if(value === 'true'){
            navigate('/home')
        }else{
            navigate('/login')
        }

    }
    const forLogout = () => {
        localStorage.removeItem('login')
        navigate('/login')
    }
    return (<>
    <li onClick={forLogout}>Logout</li>
    </>);
}
export default Home