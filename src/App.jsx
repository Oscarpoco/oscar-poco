import { useState } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar.jsx';
import SideBar from './pages/screens/SideBar.jsx';
import Dashboard from "./pages/screens/Dashboard.jsx";

// POPUPPS
import Profile from './pages/popupps/screens/Profile.jsx';

// STYLINGS
import './App.css';

function App() {

  // SIDEBAR NAVIGATION STATE
  const [activeItem, setActiveItem] = useState("Dashboard");

  // PROFILE STATE
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div className='Parent'>
      <div className='top'>
        <NavigationBar onOpen={()=>setIsProfile(true)}/>
      </div>

      <div className='bottom'>
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
        <Dashboard activeItem={activeItem} />
      </div>

      {/* POPUPPS */}

      {isProfile && (<Profile onClose={()=>setIsProfile(false)}/>)}

      {/* ENDS */}
    </div>
  );
}

export default App;
