import './Pages.css';
import { SimpleMap } from '../components/Map';

export const Resources = ({language}) =>{
  return (
    <div className='pageContainer'>
        <h1>{language === 'EN' ? 'Resources' : 'Recursos'}</h1>
        <SimpleMap />
    </div>
  );
}