import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import PricingTab from './components/pricingTab/PricingTab'
import Compare from './components/compare/Compare'
import Footer from './components/footer/Footer'
import More from './components/more/More'
import Faq from './components/faq/Faq'
import Banner from './components/banner/Banner'
import Other from './components/other/Other'
import Header2 from './components/header2/Header2'
import Chatbot from './components/chatbot/Chatbot'

function App() {

  return (
    <>
    <Header />
    {/* <Header2 /> */}
    <PricingTab />
    <Compare />
    <Faq />
    <More />
    <Other />
    <Banner />
    <Chatbot />
    <Footer />
    </>
  )
}

export default App
