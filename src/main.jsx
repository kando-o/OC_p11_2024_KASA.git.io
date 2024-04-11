import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index/view/App.jsx'
import Home from './home/assets/views/home.jsx'
import Navigation from './components/navigation/views/navigation.jsx'
import Footer from './components/footer/views/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Home />
    <App />
    <Footer />
  </React.StrictMode>,
)
