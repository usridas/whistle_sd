import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { KnowYourRights } from './pages/KnowYourRights';
import { LiveMap } from './pages/LiveMap';
import { Resources } from './pages/Resources';

function App() {
  const [tab, setTab] = useState('LiveMap');
  const [language, setLanguage] = useState('EN');
  const alerts = [
    {severity: 'error', title: 'URGENT: Confirmed ICE Report', text: 'text'},
    {severity: 'warning', title: 'ICE Sighting', text: 'text'},
    {severity: 'info', title: 'Unconfirmed Report', text: 'text'},
    {severity: 'error', title: 'URGENT: Confirmed ICE Report', text: 'text'},
    {severity: 'warning', title: 'ICE Sighting', text: 'text'},
    {severity: 'info', title: 'Unconfirmed Report', text: 'text'},
    {severity: 'error', title: 'URGENT: Confirmed ICE Report', text: 'text'},
    {severity: 'warning', title: 'ICE Sighting', text: 'text'},
    {severity: 'info', title: 'Unconfirmed Report', text: 'text'},
    {severity: 'error', title: 'URGENT: Confirmed ICE Report', text: 'text'},
    {severity: 'warning', title: 'ICE Sighting', text: 'text'},
    {severity: 'info', title: 'Unconfirmed Report', text: 'text'},
  ]
  
  return (
    <div className="App">
      <NavBar setTab={setTab} tab={tab} setLanguage={setLanguage} language={language}/>
      {tab === 'LiveMap' &&
        <LiveMap language={language} alerts={alerts}/>
      }
      {tab === 'KnowYourRights' &&
        <KnowYourRights language={language}/>
      }
      {tab === 'Resources' &&
        <Resources language={language}/>
      }
    </div>
  );
}

export default App;
