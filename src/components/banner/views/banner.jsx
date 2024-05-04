import { useLocation } from 'react-router-dom'

import '../assets/styles/banner.css'
import '/public/assets/themes/fonts.css'

function Banner () {

    const {pathname} = useLocation()

    const BannerHome = pathname === "/"
    const BannerPropos = pathname === "/a_propos"
    const BannerFlat = pathname === "/flat"

    return <>
        {BannerHome && 
            <figure className='banner'>
                <img src="/public/assets/imgBanner.png"  alt="paysage de montagne"  />
            <div className="banner__opacity"></div>
                <figcaption>
                    <p className='banner__textBorder'>Chez vous, partout et ailleurs</p>
                </figcaption>
        </figure> 
        }

        { BannerPropos && 
            <div className="propos__banner">
                <img src="../public/assets/paysage_montagne.jpg" alt="Paysage de montagne" />
            </div>
        }

        { BannerFlat && 
            <div className="flat__banner">
                <img src="../public/assets/banner_flat.jpg" alt="Visuel de salon" />
            </div>
        }
    </>
}

export default Banner
