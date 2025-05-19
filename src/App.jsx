import { useState } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar.jsx';
import SideBar from './pages/screens/SideBar.jsx';
import Dashboard from "./pages/screens/Dashboard.jsx";

// POPUPPS
import Profile from './pages/popupps/screens/Profile.jsx';

// STYLINGS
import './App.css';

// RESUME
import resume from './assets/oscarkylpoco.pdf'

function App() {

  // SIDEBAR NAVIGATION STATE
  const [activeItem, setActiveItem] = useState("Dashboard");

  // PROFILE STATE
  const [isProfile, setIsProfile] = useState(false);

  // AUTH
  const [isAuthenticated, setIsAthenticated] = useState(false);

  // DARK MODE

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  // DOWNLOAD RESUME
  const handleDownload = () => {
    const cvUrl = resume;

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'oscarkylpoco.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className='Parent'>
      <div className='top'>
        <NavigationBar
          onOpen={() => setIsProfile(true)}
          isAuthenticated={isAuthenticated}
          toggleTheme={toggleTheme}
          darkMode={darkMode}
        />
      </div>

      <div className='bottom'>

        {/* SIDEBAR */}
        <SideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isAuthenticated={isAuthenticated}
        />

        {/* DASHBOARD */}
        <Dashboard
          activeItem={activeItem}
          isAuthenticated={isAuthenticated}
          onClose={() => setIsBiometrics(false)}
          toggleTheme={toggleTheme}
          darkMode={darkMode}
          handleDownload={handleDownload}
        />

      </div>

      {/* POPUPPS */}

      {isProfile &&
        (
          <Profile
            onClose={() => setIsProfile(false)}
            isAuthenticated={isAuthenticated}
            handleDownload={handleDownload}
          />
        )}

      {/* ENDS */}

    </div>
  );
}

export default App;
