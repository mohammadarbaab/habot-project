import React from 'react';
import Navbar from './Pages/Navbar/Navbar';
import Hero from './Pages/Hero/Hero';
import './input.css';
import './index.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import YtDashboard from './Pages/YtDashboard/YtDashboard';
import BuyersPost from './Pages/BuyersPost/BuyersPost';
import GetVefified from './Pages/GetVerified/GetVefified';
import Footer from './Pages/Footer/Footer';

function App() {
  const videoId = 'i8tgRHXx4oQ';
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Dashboard></Dashboard>
      <YtDashboard videoId={videoId}></YtDashboard>
      {/* <GetVefified></GetVefified>
      <BuyersPost></BuyersPost> */}

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
