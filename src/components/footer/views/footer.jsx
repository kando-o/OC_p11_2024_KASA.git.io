import '../assets/styles/footer.css'
import Logo from "../../logo/views/logo"

function Footer () {
    return <>
        <div className="footer">
            <Logo width={105} height={32} logoClass="footer__svg" color="white" />
            <p className='footer__text'>© 2024 Kasa. All rights reserved</p>
        </div>
    </>
}

export default Footer
