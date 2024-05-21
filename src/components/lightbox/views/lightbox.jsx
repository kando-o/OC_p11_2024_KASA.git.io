import PropTypes from "prop-types"
import { useState } from "react"
import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/fontawesome-free-solid"
import "../assets/styles/lightbox.css"

fontawesome.library.add(faArrowRight)
const Lightbox = ({photos}) => {
    const [current, setCurrent] = useState(0)

    return (<div className = "lightbox">
        <img src={photos[current]} alt="une image" />
        {photos.length>1 &&(
            <>
                <p className="navItem left" onClick={()=>setCurrent( c => c>1 ? c-1 : photos.length-1)}><FontAwesomeIcon icon={faArrowLeft} /></p>
                <p className="navItem right" onClick={()=>setCurrent( c => c<photos.length-1 ? c+1 : 0)}><FontAwesomeIcon icon={faArrowRight} /></p>
                <p className="counter">{`${current+1}/${photos.length}`}</p>
            </>
        )}
    </div>)
}

Lightbox.propTypes = {
    photos: PropTypes.array
}

export default Lightbox
