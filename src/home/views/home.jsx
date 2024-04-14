import "../assets/styles/home.css"
import "/src/components/footer/assets/styles/footer.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from "../../components/navigation/views/navigation"
import Footer from "../../components/footer/views/footer"
import Galerie from "../../components/galerie/views/galerie"
import Banner from "../../components/banner/views/banner"

const router = createBrowserRouter([
    {
      path: '/',
      element: <>
          <Navigation />
          <Banner/>
          <Galerie/>
          <Footer/>
        </>
    },
    {
      path: '/a_propos',
      element: <>
        <Navigation /> 
        <Footer/>
      </>
    },
    {
      path: '/404',
      element: <>
        <h1>Oups un petit manque de vigilance de nôtre part il s'emblerait</h1>
        <Footer/>
      </>
    },
])

function Home () {
    return <RouterProvider router={router}/>
}

export default Home
