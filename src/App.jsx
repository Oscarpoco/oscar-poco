import { useState } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar.jsx';
import SideBar from './pages/screens/SideBar.jsx';
import Dashboard from "./pages/screens/Dashboard.jsx";

// STYLINGS
import './App.css';


// COMPONENT
function App() {

  return (
    <div className='Parent'>

      {/* TOP DEVIDER */}
      <div className='top'>
        <NavigationBar/>
      </div>

      {/* BOTTOM DEVIDER */}
      <div className='bottom'>
        <SideBar />
        <Dashboard />
      </div>
     
    </div>
  )
}

export default App
// ENDS
