import React, { useState } from 'react';
import NavTabs from './Navigation';
import Footer from './Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h1>Sistania Bong</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      {/* pass the currentPage and  handlepage fx to the navtabs component as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      </nav>
      {/* // run renderPage based on the current page */}
      {renderPage()}
    </div>
  );
}
