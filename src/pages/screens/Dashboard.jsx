import React from "react";

// STYLING
import '../styles/Dashboard.css'
import About from "./About";

function Dashboard (){
    return (
        <div className="Parent-dashboard">

            <div className="Child-dashboard">
                <About/>
            </div>

        </div>
    )
}

export default Dashboard;