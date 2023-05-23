import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div>
            <h1>Welcome to landing page</h1>
            <Link to="/home">Entry</Link>
        </div>
    )
}

export default LandingPage;