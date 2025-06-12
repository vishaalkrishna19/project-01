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

function App() {

  return (
    <>
    <Header />
    <PricingTab />
    <Compare />
    <Faq />
    <More />
    
    <Footer />
    </>
  )
}

export default App
