import "./Card.css"
import { Link } from "react-router-dom";


const Card = ({ id, name, image, region }) => {
    return(
        <Link to={`/${id}`} className='linkDetail'>
            <div className="card">
                <img src={image} alt="" className="flag" />
                <h1 className="card-title">{name}</h1>
                <h1>{region}</h1>
            </div>
        </Link>
    )
}

export default Card;