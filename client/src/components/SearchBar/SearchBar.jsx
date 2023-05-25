import "./SearchBar.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../Redux/actions"
import { changePage } from "../../Redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const handlerChange = (event) => {
        setName(event.target.value);
    }
    
    const submitHandler = () => {
        dispatch(getCountryByName(name))
        dispatch(changePage(1)) 
    }

    //PARA USAR EL ENTER
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          submitHandler()
        }
    };

    return(
        <div className="searchBar">
            <input type="text" placeholder="Search..." onChange={handlerChange} onKeyDown={handleKeyDown}/>
            <button type="submit" onClick={() => submitHandler()}>Search</button>
        </div>

    )

}

export default SearchBar;