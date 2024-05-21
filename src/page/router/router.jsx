import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageHome from "../home/views/home"
import PageAbout from "../about/views/about"
import PageFlat from "../flat/views/flat"
import PageError from "../error/views/error"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/flat/:id" element={<PageFlat />} />
                <Route path="*" element={<PageError />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
