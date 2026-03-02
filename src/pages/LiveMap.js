import { SimpleMap } from '../components/Map';

export const LiveMap = ({}) =>{
    
  return (
    <div style={{ height: '100vh', maxHeight: '1000px', width: '100vw', maxWidth: '1000px' }}>
        <h1>Live Map</h1>
        <SimpleMap />
    </div>
  );
}