import { useState, useCallback } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar.jsx';
import SideBar from './pages/screens/SideBar.jsx';
import Dashboard from "./pages/screens/Dashboard.jsx";

// POPUPPS
import Profile from './pages/popupps/screens/Profile.jsx';

// COMPONENTS
import IntroAnimation from './components/IntroAnimation.jsx';

// STYLINGS
import './App.css';

// RESUME
import resume from './assets/oscarkylpoco.pdf'

function App() {
  // INTRO ANIMATION STATE
  const [showIntro, setShowIntro] = useState(true);

  // SIDEBAR NAVIGATION STATE
  const [activeItem, setActiveItem] = useState("Dashboard");

  // PROFILE STATE
  const [isProfile, setIsProfile] = useState(false);

  // AUTH
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // NAVIGATE TO SECTION - passed to About component for card clicks
  const navigateToSection = useCallback((section) => {
    setActiveItem(section);
  }, []);

  // HANDLE INTRO COMPLETE
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className={`Parent ${darkMode ? 'dark-theme' : ''}`}>
      <div className='top'>
        <NavigationBar
          onOpen={() => setIsProfile(true)}
          isAuthenticated={isAuthenticated}
          toggleTheme={toggleTheme}
          darkMode={darkMode}
          activeItem={activeItem}
        />
      </div>

      <div className='bottom'>

        {/* SIDEBAR */}
        <SideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isAuthenticated={isAuthenticated}
          darkMode={darkMode}
        />

        {/* DASHBOARD */}
        <Dashboard
          activeItem={activeItem}
          isAuthenticated={isAuthenticated}
          onClose={() => setIsBiometrics(false)}
          toggleTheme={toggleTheme}
          darkMode={darkMode}
          handleDownload={handleDownload}
          navigateToSection={navigateToSection}
        />

      </div>

      {/* POPUPPS */}

      {isProfile &&
        (
          <Profile
            onClose={() => setIsProfile(false)}
            isAuthenticated={isAuthenticated}
            handleDownload={handleDownload}
            darkMode={darkMode}
          />
        )}

      {/* ENDS */}

    </div>
  );
}

export default App;
