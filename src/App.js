import React from 'react';
import ImageGrid from './components/ImageGrid';
import DynamicTabs from './components/DynamicTabs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <ImageGrid />
      <DynamicTabs />
      <Footer />
    </div>
  );
};

export default App;
