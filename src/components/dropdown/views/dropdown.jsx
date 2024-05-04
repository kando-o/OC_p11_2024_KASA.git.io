import "../assets/styles/dropdown.css"
import { useLocation } from "react-router-dom"
import Collapser from "../../collapser/views/collapser"
import PropTypes from 'prop-types'

function Dropdown ({dataProp, title}) {
    Dropdown.propTypes = {
        dataProp: PropTypes.array,
        title: PropTypes.string.isRequired
    };

    const {pathname} = useLocation()
    const pathPropos = pathname === "/a_propos"
    const pathFlat = pathname === "/flat"

    return <div className="about__content">
        {pathFlat && dataProp &&
            dataProp.map(item => (
            <Collapser title = {title} key = {item.id}>
                <p>{item.description}</p>
            </Collapser>)
            )
        }

        {pathPropos &&
            dataProp.map(item => (
                <Collapser title = {item.title} key = {item.id}>
                    <p>{item.text}</p>
                </Collapser>
            ))
        }
    </div>
}

export default Dropdown
