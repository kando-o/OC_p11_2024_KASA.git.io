import '../assets/styles/navigation.css'
import {NavLink} from 'react-router-dom'
import Logo from "../../logo/views/logo"

function Navigation () {
    return <nav className='navigation'>
        <Logo width={211} height={68} color="#FF6060" logoClass='logo' type="logoNav" />

        <ul className='navigation__list'>
            <li className='navigation__listItem'>
                <NavLink to='/'>Accueil</NavLink>
            </li>
            <li className='navigation__listItem'>
                <NavLink to='/about'>A Propos</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navigation
