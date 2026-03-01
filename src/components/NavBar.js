import { AppBar, Button, ButtonGroup, IconButton, Link, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.js';

export const NavBar = ({setTab, tab}) => {
    const homeOnClick = () => {
        setTab('Home');
    }
    
    const knowYourRightsOnClick = () => {
        setTab('KnowYourRights');
    }

    const liveMapOnClick = () => {
        setTab('LiveMap');
    }

    const resourcesOnClick = () => {
        setTab('Resources');
    }

    console.log("set tab: ", tab);
    return (
        <AppBar position="absolute">
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <h1>Whistle San Diego</h1>
                </div>
                <div style={{display: 'flex'}}>
                    <MenuItem key={'Home'} onClick={homeOnClick}>
                        <p style={{fontWeight: tab==='Home'?'bold':'unset'}}>Home</p>
                    </MenuItem>
                    <MenuItem key={'Home'} onClick={knowYourRightsOnClick}>
                        <p style={{fontWeight: tab==='KnowYourRights'?'bold':'unset'}}>Know Your Rights</p>
                    </MenuItem>
                    <MenuItem key={'Home'} onClick={liveMapOnClick}>
                        <p style={{fontWeight: tab==='LiveMap'?'bold':'unset'}}>Live Map</p>
                    </MenuItem>
                    <MenuItem key={'Home'} onClick={resourcesOnClick}>
                        <p style={{fontWeight: tab==='Resources'?'bold':'unset'}}>Resources</p>
                    </MenuItem>
                </div>
            </Toolbar>
        </AppBar>
    // <div className='navBarContainer'>
    //     <ButtonGroup variant="outlined" aria-label="Basic button group">
    //         <Button onClick={homeOnClick} variant={tab === 'Home' ? 'contained': 'outlined'}>Home</Button>
    //         <Button onClick={knowYourRightsOnClick} variant={tab === 'KnowYourRights' ? 'contained': 'outlined'}>Know Your Rights</Button>
    //         <Button onClick={liveMapOnClick} variant={tab === 'LiveMap' ? 'contained': 'outlined'}>Live Map</Button>
    //         <Button onClick={resourcesOnClick} variant={tab === 'Resources' ? 'contained': 'outlined'}>Resources</Button>
    //     </ButtonGroup>
    // </div>
    )
}