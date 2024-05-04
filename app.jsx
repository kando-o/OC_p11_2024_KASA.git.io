import "/src/app/assets/styles/app.css"
import "/src/components/footer/assets/styles/footer.css"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import Navigation from "./src/components/navigation/views/navigation"
import Footer from "./src/components/footer/views/footer"
import Galerie from "./src/components/galerie/views/galerie"
import Banner from "./src/components/banner/views/banner"
import Propos from "./src/page/a_propos/views/a_propos"
import Flat from "./src/page/flat/views/flat"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path:"a_propos",
                element: 
                    <Propos />
                ,
            },
            {
                path:"flat",
                element: 
                    <Flat />,
            }
        ]
    }
])

function Root () {
    // Obtient le chemin actuel de l'URL
    const {pathname} = useLocation()

    // Condition pour ne pas afficher Galerie sur la page /a_propos, /flat
    const showHome = pathname ==='/'

    return <>
        <Navigation/>
        <Banner/>

        {showHome && (
            <Galerie/>
        )}
        { !showHome && 
            <div className="container">
                <Outlet/>
            </div>
        }

        <Footer/>
    </>
}

function App () {
    return <RouterProvider router={router}/>
}

export default App
