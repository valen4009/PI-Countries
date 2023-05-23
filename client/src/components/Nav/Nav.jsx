import "./Nav.css"
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
    const location = useLocation();
    const HandleHomeClick = () => {
        if(location.pathname !== "/home") { 
            window.location.href = "/home"
        }else {
            window.location.reload()
        };
    }

    return(
        <div className="nav">
            <div className="buttons">
            <Link to={"/home"} onClick={HandleHomeClick}>
                <button className="buttonHome">
                    HOME
                </button>
            </Link>
            <Link to={"/form"}>
                <button className="buttonAct">
                    ADD ACTIVITY
                </button>
            </Link>
            </div>
            <div className="search">
                {location.pathname === "/home" && <SearchBar/>}
            </div>
        </div>
    )
};

export default Nav;