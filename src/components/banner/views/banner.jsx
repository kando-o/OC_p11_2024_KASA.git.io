import '../assets/styles/banner.css'
import '/public/assets/themes/fonts.css'
// my-vue-app/src/assets/themes/fonts.css

function Banner () {

    return <>
        <figure className='banner'>
                <img src="/public/assets/imgBanner.png"  alt="paysage de montagne"  />
            <div className="banner__opacity"></div>
                <figcaption>
                    <p className='banner__textBorder'>Chez vous, partout et ailleurs</p>
                </figcaption>
        </figure>
    </>
}

export default Banner
