import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { KnowYourRights } from './pages/KnowYourRights';
import { LiveMap } from './pages/LiveMap';
import { Resources } from './pages/Resources';

function App() {
  const [tab, setTab] = useState('Home');
  
  return (
    <div className="App">
      <NavBar setTab={setTab} tab={tab}/>
      {tab === 'Home' &&
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
      }
    </div>
  );
}

export default App;
