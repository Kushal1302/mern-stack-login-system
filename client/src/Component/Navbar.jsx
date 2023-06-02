import {AppBar , Box ,IconButton , Typography  , Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
const toolStyle = {
    background: '#c5aa6a'
}
const brand = {
    fontSize :'20px',
    color:'white',
    fontWeight:'20px',
    marginLeft:'10px'
}

const Navbar = ({openClose}) => {
    return (<>
    <Box>
        <AppBar position='static'>
            <Toolbar style={toolStyle}>
                <IconButton>
                    <MenuIcon onClick={openClose}/>
                </IconButton>
                <Box>
                    <Typography style={brand}>
                        <b>L</b><span>ogin</span><b>S</b><span>ystem</span>
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    </Box>

    </>);
}
export default Navbar