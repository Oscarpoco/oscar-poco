import React from "react";

// STYLING
import '../styles/SideBar.css'

// ICONS
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDashboard, MdCode, MdWork, MdSchool } from "react-icons/md";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaProjectDiagram, FaLaptopCode } from "react-icons/fa";
import { BsBriefcase, BsAward } from "react-icons/bs";


function SideBar() {
    return (
        <div className="Parent-sidebar">
            <div className="sidebar-content">

                {/* UPLOAD BUTTON */}
                <div className="upload-button">
                    <IoAddCircleOutline className="upload-icon" />
                    <span>Add New Project</span>
                </div>

                {/* NAVIGATION LINKS */}
                <div className="sidebar-nav">
                    <div className="nav-item active">
                        <MdDashboard className="nav-icon" />
                        <span>Dashboard</span>
                    </div>
                    <div className="nav-item">
                        <MdCode className="nav-icon" />
                        <span>Skills</span>
                    </div>
                    <div className="nav-item">
                        <MdWork className="nav-icon" />
                        <span>Experience</span>
                    </div>
                    <div className="nav-item">
                        <MdSchool className="nav-icon" />
                        <span>Education</span>
                    </div>
                    <div className="nav-item">
                        <AiFillStar className="nav-icon" />
                        <span>Featured</span>
                    </div>
                    <div className="nav-item">
                        <BsAward className="nav-icon" />
                        <span>Testimonials</span>
                    </div>
                    <div className="nav-item">
                        <BiSolidMessageDetail className="nav-icon" />
                        <span>Contact</span>
                    </div>
                </div>

                {/* STORAGE DETAILS */}
                <div className="storage-details">
                    <h3>PORTFOLIO STATS</h3>
                    <div className="storage-item">
                        <div className="storage-icon-container">
                            <FaLaptopCode className="storage-icon" />
                        </div>
                        <div className="storage-info">
                            <span>CURRENT</span>
                            <div className="storage-bar">
                                <div className="storage-progress"></div>
                            </div>
                            <span className="storage-text">5 Active Projects</span>
                        </div>
                    </div>
                    <div className="storage-item">
                        <div className="storage-icon-container photo-icon">
                            <FaProjectDiagram className="storage-icon" />
                        </div>
                        <div className="storage-info">
                            <span>PORTFOLIO</span>
                            <div className="storage-bar">
                                <div className="storage-progress photo-progress"></div>
                            </div>
                            <span className="storage-text">15 Showcased Works</span>
                        </div>
                    </div>
                    <div className="upgrade-storage">
                        <span>View Full Portfolio</span>
                        <span className="arrow">→</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;