import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { orderCountries, filterByContinent, filterByActivity, getActivities } from "../../Redux/actions";


const FilterAndOrders = () => {
    const dispatch = useDispatch(); 
    const [orderOption, setOrderOption] = useState('');

    const handleOrderChange = (event) => {
        const selectedOption = event.target.value;
        setOrderOption(selectedOption);
        dispatch(orderCountries(selectedOption));
    };

    const handlerFilterByContinent = (event) => {
        const continent = event.target.value;
        dispatch(filterByContinent(continent))
    }

    const activities = useSelector((state) => state.activities);
    const [selectActivity, setSelectActivity] = useState("");
  
    const handleActChange = (event) => {
        const activityId = event.target.value;
        setSelectActivity(activityId);
        dispatch(filterByActivity(activityId));
    };

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch])


    return (
        <div>
            
            <select value={orderOption} onChange={handleOrderChange}>
                <option value="">Sort by</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="population_desc">Population (higher to lower)</option>
                <option value="population_asc">Population (lower to higher)</option>
            </select>

            <select onChange={handlerFilterByContinent}>
                <option value="all">select continent</option>
                <option value="all">All</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select> 

            <select name="activity" value={selectActivity} onChange={handleActChange}>
                <option value="all">select activity</option>
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