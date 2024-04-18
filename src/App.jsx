import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Franchise from "./components/Franchise/Franchise";
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact'
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import './index.css'; // Import your main CSS file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loading />} {/* Render loading component only when isLoading is true */}
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <Companies />
          <Value />
          <Residencies />
          <Franchise />
          <GetStarted />
          <Contact />
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
