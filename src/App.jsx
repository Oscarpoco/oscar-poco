import { useState } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar.jsx';
import SideBar from './pages/screens/SideBar.jsx';
import Dashboard from "./pages/screens/Dashboard.jsx";

// STYLINGS
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className='Parent'>
      <div className='top'>
        <NavigationBar/>
      </div>

      <div className='bottom'>
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
        <Dashboard activeItem={activeItem} />
      </div>
    </div>
  );
}

export default App;
