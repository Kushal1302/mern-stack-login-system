import {AppBar , Switch , Box ,IconButton , Typography  , Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

// const toolStyle = {
//     background: '#c5aa6a',
    
// }


const Navbar = ({openClose , enableDark , theme}) => {
    const brand = {
        fontSize :'20px',
        color:theme.color,
        fontWeight:'20px',
        marginLeft:'10px'
    }
    return (<>
    <Box>
        <AppBar position='static'>
            <Toolbar style={{backgroundColor:theme.backgroundColor}}>
                <IconButton>
                    <MenuIcon onClick={openClose} style={{color:theme.color}}/>
                </IconButton>
                <Box>
                    <Typography style={brand}>
                        <b>L</b><span>ogin</span><b>S</b><span>ystem</span>
                    </Typography>
                </Box>
                <Box style={{ width:'100%', display:'flex',justifyContent:"end"}}>
                    <Switch onClick={enableDark} label="Dark Mode"/>
                </Box>

            </Toolbar>
        </AppBar>
    </Box>

    </>);
}
export default Navbar