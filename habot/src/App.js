import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import Hero from './Pages/Hero/Hero'
import './input.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import YtDashboard from './Pages/YtDashboard/YtDashboard'
import BuyersPost from './Pages/BuyersPost/BuyersPost'


function App() {
  const videoId = "i8tgRHXx4oQ";
  return (
    <div>
    {/* <Navbar></Navbar>
    <Hero></Hero>
    <Dashboard></Dashboard> */}
    {/* <YtDashboard videoId={videoId}></YtDashboard> */}
    <BuyersPost></BuyersPost>
    </div>
  )
}

export default App
