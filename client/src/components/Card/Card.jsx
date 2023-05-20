import { Link } from "react-router-dom";


const Card = ({ id, name, image, region }) => {
    return(
        <div>
            <Link to={`/${id}`} className="name">
                <h1>{name}</h1>
            </Link>

            <img src={image} alt="" className="flag" />

            <div>
                <h2>Country: {name}</h2>
                <h2>Continent: {region}</h2>
            </div>
        </div>
    )
}

export default Card;