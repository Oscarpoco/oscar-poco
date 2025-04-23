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

  // AUTH
  const [isAuthenticated, setIsAthenticated] = useState(false);

  // LOGIN BIOMETRICS
  const [isBiometrics, setIsBiometrics] = useState(false)

  return (
    <div className='Parent'>
      <div className='top'>
        <NavigationBar 
        onOpen={()=>setIsProfile(true)}
        isAuthenticated={isAuthenticated}
        />
      </div>

      <div className='bottom'>

        {/* SIDEBAR */}
        <SideBar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
        isAuthenticated={isAuthenticated}
        setIsBiometrics={setIsBiometrics}
        />

        {/* DASHBOARD */}
        <Dashboard 
        activeItem={activeItem}
        isAuthenticated={isAuthenticated} 
        isBiometrics={isBiometrics}
        onClose={()=>setIsBiometrics(false)}
        />

      </div>

      {/* POPUPPS */}

      {isProfile && 
      (
      <Profile 
      onClose={()=>setIsProfile(false)} 
      isAuthenticated={isAuthenticated}
      />
      )}

      {/* ENDS */}

    </div>
  );
}

export default App;
