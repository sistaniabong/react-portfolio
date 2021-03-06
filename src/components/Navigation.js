import React from 'react';
import '../styles/navigation.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a 
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About Me
            </a>
        </li>
        <li className="nav-item">
            <a 
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')} // we need to pass a fx to the onclick event handler because we don't want it to run immediately
            // this is a ternary if the page is 'Home', the class name of the a tag is nav link active mode, if not nav-link mode
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
            </a>
        </li>
        </ul>
    </div>
  );
}

export default NavTabs;
