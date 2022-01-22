import React, { useState } from 'react';
import NavTabs from './Navigation';
import Footer from './Footer';
import Projects from './Projects';

// import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* pass the currentPage and  handlepage fx to the navtabs component as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // run renderPage based on the current page */}
      {renderPage()}
    </div>
  );
}
