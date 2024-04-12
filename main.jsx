import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './src/components/navigation/views/navigation.jsx'
import Footer from './src/components/footer/views/footer.jsx'
import Banner from './src/components/banner/views/banner.jsx'
import Galerie from './src/components/galerie/views/galerie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Banner />
    <Galerie />
    <Footer />
  </React.StrictMode>,
)
