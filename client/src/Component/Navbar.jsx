import {AppBar , Box ,IconButton , Typography  , Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
const toolStyle = {
    background: '#e0e0e0'
}
const brand = {
    fontSize :'20px',
    color:'maroon',
    fontWeight:'700'
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