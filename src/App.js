import React, { useState } from "react";
import "./App.css";
import About from './components/about/About'
import ResumePage from "./components/resume/Resume";
import PortfolioPage from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import LeftSideBar from './components/sidebar/left/LeftSideBar';
import Right from "./components/sidebar/right/RightSideBar";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [currentPage, setCurrentPage] = useState('about');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About/>;
      case 'resume':
        return <ResumePage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`App ${theme}`}>
      <div className="sidebar left-sidebar">
      <LeftSideBar currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
      <main className="main-content">
        {renderCurrentPage()}
      </main>

      <div className="sidebar right-sidebar">
      <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      <Right />
      </div>
    </div>
  );

  
}

export default App;
