import "./CheckList.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../Redux/actions";

const Checklist = (props) => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    const [allCounts, setAllCounts] = useState(allCountries.map((item) => {return{...item, isChecked: false}}));
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    useEffect(() => {
        const all = allCountries.map((item) => {return{...item,
        isChecked: props.keepCountries? props.keepCountries.length? props.keepCountries.includes(item.name) : false : false }});
    setAllCounts(all)
    }, [allCountries]);

    useEffect(() => {
        props.setInFormCountry(allCounts.filter(country => country.isChecked).map(el => el.name));
    }, [allCounts]);

    const changeIsChecked = (event) => {
        const name = event.target.name;
        const newCountries = [...allCounts].map((item) => item.name === name? {...item, isChecked:!item.isChecked} : item);
        setAllCounts(newCountries)
    };

    const changeSearchValue = (event) => {
        const value = event.target.value? event.target.value.toLowerCase(): '';
        setSearch(value);
    };

    const changeExpanded = () => {
        setExpanded(!expanded);
    }

    const filterName = allCounts.filter(country => country.name.toLowerCase().includes(search));
    
    return(
        <div className="checkSelect">
            <div className="selectBox">
                {/* <label className="countries" htmlFor="countries">Countries: </label> */}
                <input type="search" placeholder="Search Countries" onChange={changeSearchValue} value={search}/>
                <label className="arrow" onClick={changeExpanded}>⊽</label>
            </div>
            {expanded && (
            <div id="checkboxes">
                {filterName.map(country => 
                <label key={country.id}>
                    <input type="checkbox" name={country.name} checked={country.isChecked} onChange={changeIsChecked}/>
                    {country.name.split(', ')}
                </label>
                )}
            </div>
            )}
        </div>
    )
}

export default Checklist;