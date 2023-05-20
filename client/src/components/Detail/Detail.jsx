import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetail } from "../../Redux/actions";
import Activity from "./Activity/Activity";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const country = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryDetail(id));
    }, [dispatch, id])

    console.log(country)
    return(
        <div>
                <h1>{country?.name}</h1>
                <img src={country?.image} alt={country.name}/>
                <p>ID: {country?.id}</p>
                <p>Continent: {country?.region}</p>
                <p>Capital: {country?.capital}</p>
                <p>Subregion: {country?.subregion}</p>
                <p>Area: {country?.area}</p>
                <p>Population: {country?.population}</p>

                {
                    country.Activities?.map((act) => {
                        return(
                            <Activity
                            key = {act.id}
                            name = {act.name}
                            difficult = {act.difficult}
                            duration = {act.duration}
                            season = {act.season}
                            />
                        )
                    })
                }
        </div>
    );
};

export default Detail;