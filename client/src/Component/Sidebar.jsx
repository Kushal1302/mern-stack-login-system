
import {Drawer } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { NavLink } from 'react-router-dom';
const Sidebar = (props) => {
   
    return (<>
        <Drawer anchor={'left'} open={props.toggle}  onClose={props.toggle}
        hideBackdrop={true} variant='persistent' ModalProps={{
            keepMounted:true
        }}
        sx={{
            '& .MuiDrawer-paper':
            {
                marginTop:'64px',
            background:"#f5f5f5",
            width:250,
            height:'calc(100vh - 64px)',
            borderRight:'none',
            padding:'10px 0 0 10px',
            '& > a':{
                display:'flex',
                justifyContent:'start',
                
                fontSize:'20px',
                cursor:'pointer',
                fontWeight:"70",
                textDecoration:'none',
                listStyle:'none',
                color:'black',
                padding:'10px 0 0 10px',
                '& > svg':{
                    marginRight:'5px',
                    
                    
                }
                
               
            }
            }
            
        }} >
            <NavLink to={'/'} style={{fontWeight:'bold'}}> <HowToRegIcon/> Register Account</NavLink>
            <NavLink to={'/login'} style={{fontWeight:'bold'}}> <LoginIcon/> Login</NavLink>
                
        </Drawer>
    </>)
}
export default Sidebar