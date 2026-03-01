import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { SimpleMap } from './components/Map';

function App() {
  const [tab, setTab] = useState('Home');
  
  return (
    <div className="App">
      <NavBar setTab={setTab} tab={tab}/>
      <SimpleMap />
      {/* {tab === 'Home' &&
        <Home />
      }
      {tab === 'KnowYourRights' &&
        <KnowYourRights />
      }
      {tab === 'LiveMap' &&
        <LiveMap />
      }
      {tab === 'Resources' &&
        <Resources />
      } */}
    </div>
  );
}

export default App;
