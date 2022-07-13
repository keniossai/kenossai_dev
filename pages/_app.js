import React, {useState} from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/index'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}  />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
