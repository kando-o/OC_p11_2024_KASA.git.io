import "../assets/styles/home.css"
import "/src/components/footer/assets/styles/footer.css"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import Navigation from "../../components/navigation/views/navigation"
import Footer from "../../components/footer/views/footer"
import Galerie from "../../components/galerie/views/galerie"
import Banner from "../../components/banner/views/banner"
import Propos from "../../page/a_propos/views/a_propos"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"a_propos",
        element: <Propos/>,
      }
    ]
  }
])

function Root () {
  // Obtient le chemin actuel de l'URL
  const {pathname} = useLocation()

  const showGalerie = pathname !== '/a_propos' 
  // Condition pour ne pas afficher Galerie sur la page /a_propos
  const showBanner = pathname ==='/'

  return <>
    <Navigation/>
      {showBanner && <Banner/>}
      {/* Affiche Galerie seulement si le chemin n'est pas /a_propos */}
      {showGalerie && <Galerie/>}
      <div className="container">
        <Outlet/>
      </div>
    <Footer/>
  </>
}

function Home () {
    return <RouterProvider router={router}/>
}

export default Home
