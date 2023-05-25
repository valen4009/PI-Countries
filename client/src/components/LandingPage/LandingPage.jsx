import "./Landing.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div className="landing">
            <h1 className="h1">Welcome to countries of the world</h1>
            <Link to="/home" className="button">GO</Link>
        </div>
    )
}

export default LandingPage;