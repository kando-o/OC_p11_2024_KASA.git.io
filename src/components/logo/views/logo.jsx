import PropTypes from "prop-types"

const Logo = ({width, height, color, logoClass }) => {
    return (
     
            <svg className={logoClass} width={width} height={height} viewBox="0 0 211 68" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill={color} d="M20 35 9 46v16H0V0h9v35L42 0h10L26 28l28 34H44L20 35ZM119 57l3-6c4 2 11 4 17 4 8 0 11-2 11-6 0-11-30-2-30-20 0-9 8-14 20-14 6 0 13 1 17 4l-4 7c-4-3-9-4-13-4-8 0-11 3-11 6 0 11 29 2 29 21 0 8-8 14-20 14-8 0-15-3-19-6ZM210 34v28h-8v-6c-3 4-8 7-15 7-11 0-18-6-18-14s5-14 19-14h14v-2c0-7-5-11-13-11-5 0-11 2-15 5l-3-6c5-4 12-7 19-7 13 1 20 7 20 20Zm-8 14v-7h-13c-9 0-11 3-11 7 0 5 4 8 10 8 7 0 12-3 14-8ZM92 50v12l5-3V47l-5 3Z"/>
            <path fill={color} d="M106 34 84 22l-12-7-12 21v19l22 13 2-1V48l10-17 10 6v18l2-1V34Z"/>
            </svg>
        )
    
}

Logo.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    logoClass: PropTypes.string.isRequired,
}

export default Logo