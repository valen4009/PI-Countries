import { Link } from "react-router-dom";

const Card = ({ id, name, flag, continent }) => {
    return(
        <div>
            <Link to={`/${id}`} className="name">
                <h1>{name}</h1>
            </Link>

            <img src={flag} alt="" className="flag" />

            <div>
                <h2>{name}</h2>
                <h2>{continent}</h2>
            </div>
        </div>
    )
}

export default Card;