import "./Detail.css"
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
            <h1 className="CountryName">{country?.name}</h1>
            <div className="detail">
                <img src={country?.image} alt={country.name} className="CountryImg"/>
                <div className="CountryP">
                    <h2 className="H2">ID: <b className="b">{country?.id}</b></h2>
                    <h2 className="H2">Continent: <b className="b">{country?.region}</b></h2>
                    <h2 className="H2">Capital: <b className="b">{country?.capital}</b></h2>
                    <h2 className="H2">Subregion: <b className="b">{country?.subregion}</b></h2>
                    <h2 className="H2">Area: <b className="b">{country?.area}</b></h2>
                    <h2 className="H2">Population: <b className="b">{country?.population}</b></h2>
                </div>

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
        </div>
    );
};

export default Detail;