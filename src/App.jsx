import { useState } from 'react'

// SCREENS
import NavigationBar from './pages/screens/NavigationBar';

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

      </div>
     
    </div>
  )
}

export default App
// ENDS
