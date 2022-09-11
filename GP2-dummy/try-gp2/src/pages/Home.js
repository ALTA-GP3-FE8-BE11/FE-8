import React from 'react'
import Cards from '../component/card'
import Footer from '../component/footer'
import NavbarNav from '../component/navbar'
import { Tab, Tabs } from "react-bootstrap";

const Home = () => {
  return (
    <div>
        <NavbarNav />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home