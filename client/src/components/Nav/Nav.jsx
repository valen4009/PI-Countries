import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <div>
            <Link to={"/home"}>
                <p>
                    HOME
                </p>
            </Link>
            <Link to={"/About"}>
                <p>
                    ABOUT
                </p>
            </Link>
            <Link to={"/form"}>
                <p>
                    ADD ACTIVITY
                </p>
            </Link>
        </div>
    )
};

export default Nav;