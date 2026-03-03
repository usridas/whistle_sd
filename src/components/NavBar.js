import { AppBar, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const NavBar = ({setTab, tab, setLanguage, language}) => {

    const { isXSmall, isSmall } = useScreenResolution();
    
    const knowYourRightsOnClick = () => {
        setTab('KnowYourRights');
    }

    const liveMapOnClick = () => {
        setTab('LiveMap');
    }

    const resourcesOnClick = () => {
        setTab('Resources');
    }

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <AppBar position="absolute">
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Whistle San Diego</h1>
                {(isXSmall || isSmall) && <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>}
                {!isXSmall && !isSmall && <div style={{display: 'flex', alignItems: 'center'}}>
                    <MenuItem key={'Home'} onClick={liveMapOnClick}>
                        <p style={{fontWeight: tab==='LiveMap'?'bold':'unset'}}>{language === 'EN' ? 'Live Map' : 'Mapa en vivo'}</p>
                    </MenuItem>
                    <MenuItem key={'KnowYourRights'} onClick={knowYourRightsOnClick}>
                        <p style={{fontWeight: tab==='KnowYourRights'?'bold':'unset'}}>{language === 'EN' ? 'Know Your Rights' : 'Conozca sus derechos'}</p>
                    </MenuItem>
                    <MenuItem key={'Resources'} onClick={resourcesOnClick}>
                        <p style={{fontWeight: tab==='Resources'?'bold':'unset'}}>{language === 'EN' ? 'Resources' : 'Recursos'}</p>
                    </MenuItem>
                    <FormControl sx={{display: 'flex'}} className='languageControl'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language}
                            size='small'
                            onChange={handleChange}
                            sx={{display: 'flex', flexDirection: 'column', color: 'black', backgroundColor: 'white'}}
                        >
                            <MenuItem value={'EN'}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/us.png 2x`}
                                    src={`https://flagcdn.com/w20/us.png`}
                                    alt=""
                                />
                                <p style={{display: 'inline'}}> EN</p>
                            </MenuItem>
                            <MenuItem value={'ES'}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/es.png 2x`}
                                    src={`https://flagcdn.com/w20/es.png`}
                                    alt=""
                                />
                                <p style={{display: 'inline'}}> ES</p>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>}
            </Toolbar>
        </AppBar>
    )
}