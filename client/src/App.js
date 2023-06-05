import {Routes , Route} from 'react-router-dom'
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';

import './index.css'
import { useState } from 'react';
const root = document.getElementById('root')
function App() {
  const [userDetails , setUserDetails] = useState({})
 
  const value = localStorage.getItem('login')
  const [toggle , setToggle] =useState(false);
  window.onclick = (e) => {
    if(e.target === root){
      toggle?setToggle(false):setToggle()
    }
  }
  const [theme , setTheme] = useState({
    backgroundColor:"#f5f5f5",
    color:'black'
  })
  const enableDark = () => {
    // console.log("click")
    theme.backgroundColor === '#f5f5f5'?setTheme({
      backgroundColor:"black",
    color:'white'
    }):setTheme({
      backgroundColor:"#f5f5f5",
    color:'black'
    })
    

  }
  const openClose = () => {
     toggle?setToggle(false):setToggle(true)
  }
  

  return (
  <>
  
    <Navbar openClose={openClose} enableDark={enableDark} theme={theme}/>
    <Sidebar toggle = {toggle} theme={theme} />
  
    
      <Routes>

        <Route path='/home' element={(userDetails && userDetails._id) || value === 'true' ? <Home/> : <Login/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login setUserDetails = {setUserDetails} />}/>
      </Routes>
 

    </>
  );
}

export default App;
