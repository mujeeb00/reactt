import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
      <UserCard />
      <Footer />
    </div>
  );
}

export default App;
