import Star from "./star"
import PropTypes from "prop-types"
import "../assets/styles/score.css"

const Score = ({score}) => {
    const arr = new Array(5).fill(1)
    return (
        <div className="score">
            {arr.map((_, r)=> <Star key={`star-${r}`} color={score>r ? "#f78": "#eee"} />)}
        </div>
    )
}

Score.propTypes = {
    score: PropTypes.number.isRequired
}
export default Score