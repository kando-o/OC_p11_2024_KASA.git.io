import Header from "../../components/navigation/views/navigation"
import Footer from "../../components/footer/views/footer"
import PropTypes from 'prop-types'
import "../../layouts/page/assets/styles/page.css"
import '../../index/assets/styles/index.css'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <header className="layout_header">
                <Header />
            </header>
            <main className="layout_main">
                {children}
            </main>
            <footer className="layout_footer" >
                <Footer />
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout