import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/fontawesome-free-solid"
import PropTypes from "prop-types"

fontawesome.library.add(faStar)
const Star = ({color="white"}) => {
    return (<FontAwesomeIcon icon="star" color={color} /> )
}

Star.propTypes = {
    color: PropTypes.string
}

export default Star
