import "./Filter.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { orderCountries, filterByContinent, filterByActivity, getActivities } from "../../Redux/actions";
import { changePage } from "../../Redux/actions";


const FilterAndOrders = () => {
    const dispatch = useDispatch(); 
    const [orderOption, setOrderOption] = useState('');

    //ORDER
    const handleOrderChange = (event) => {
        const selectedOption = event.target.value;
        setOrderOption(selectedOption);
        dispatch(orderCountries(selectedOption));
        dispatch(changePage(1));
    };

    //FILTER BY CONTINENT
    const handlerFilterByContinent = (event) => {
        const continent = event.target.value;
        dispatch(filterByContinent(continent))
        dispatch(changePage(1));
        dispatch(orderCountries(orderOption));
    };

    const activities = useSelector((state) => state.activities);
    const [selectActivity, setSelectActivity] = useState("");
  
    //FILTER ACTIVITY
    const handleActChange = (event) => {
        const activityId = event.target.value;
        setSelectActivity(activityId);
        dispatch(filterByActivity(activityId));
        dispatch(changePage(1));
        dispatch(orderCountries(orderOption));
    };

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch])


    return (
        <div>
            <label className="labelSort">Sort by: </label>
            <select value={orderOption} onChange={handleOrderChange} className="sort">
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="population_desc">Population (higher to lower)</option>
                <option value="population_asc">Population (lower to higher)</option>
            </select>

            <label className="labelContinent">Filter by continent: </label>
            <select onChange={handlerFilterByContinent} className="continent">
                <option value="all">All</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select> 

            <label className="labelActivity">Filter by activity: </label>
            <select name="activity" value={selectActivity} onChange={handleActChange} className="activity">
                <option value="all">All</option>
                    {activities.map((activity) => (
                <option key={activity.id} value={activity.id}>
                    {activity.name}
                </option>
                ))}
            </select>


        </div>
    )
}

export default FilterAndOrders