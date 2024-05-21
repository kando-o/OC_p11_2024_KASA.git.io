import '../assets/styles/banner.css'
import '/public/assets/themes/fonts.css'
import PropTypes from "prop-types"

function Banner ({imageUrl, text}) {

    return <figure className='banner'>
        <img src={imageUrl}  alt={text ?? "bannière du site"} />
        {text && (<div className="banner__opacity"></div>)}
        <figcaption>
            {text && (
                <p className='banner__textBorder'>{text}</p>
            )}
        </figcaption>
    </figure> 
}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Banner
