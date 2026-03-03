import './Pages.css';
import { Alert, AlertTitle, Card, CardContent, Grid } from '@mui/material';
import { SimpleMap } from '../components/Map';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const LiveMap = ({language, alerts}) =>{

  const { isXSmall, isSmall, isMedium } = useScreenResolution();
    
  return (
    <div className='pageContainer'>
        <h1>{language === 'EN' ? 'Live Map' : 'Mapa en vivo'}</h1>
        <Grid container spacing={2}>
          {(isSmall || isXSmall || isMedium) &&
            <Grid size={12}>
              <SimpleMap/>
            </Grid>
          }
          <Grid size={{lg: 4, md: 12, sm: 12, xs: 12}} sx={{maxHeight: '795px'}}>
            <Card elevation={3} sx={{height: '100%', overflowY: 'scroll'}}>
              <CardContent>
                {alerts.length === 0 && <Alert severity='info'>
                  <AlertTitle>No updates</AlertTitle>
                  There have been no sightings in the last 7 days.
                </Alert>}
                <Grid container spacing={2}>
                  {alerts.map(alert => (
                    <Grid size={12}>
                      <Alert severity={alert.severity}>
                        <AlertTitle>{alert.title}</AlertTitle>
                        <div style={{display: 'flex'}}>{alert.text}</div>
                      </Alert>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {!isSmall && !isXSmall && !isMedium &&
            <Grid size={8}>
              <SimpleMap/>
            </Grid>
          }
        </Grid>
    </div>
  );
}