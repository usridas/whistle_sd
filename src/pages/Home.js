import { SimpleMap } from '../components/Map';

export const Home = ({}) =>{
    
  return (
    <div style={{ height: '100vh', maxHeight: '1000px', width: '100vw', maxWidth: '1000px' }}>
        <SimpleMap />
    </div>
  );
}