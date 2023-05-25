import "./Form.css"
import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { addActivity, getActivities, getCountries } from "../../Redux/actions";
import Checklist from "./Checklist/Checklist"
import Validate from "./validate/Validate"; 

const Form = () => {
    const dispatch = useDispatch()
    const [activity, setActivity] = useState({
        name: "",
        difficult: "",
        duration: "",
        season: "",
        countries: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        difficult: "",
        duration: "",
        season: "",
        countries: "",
    });
    
    const handleChange = (event) => {
        setActivity({
            ...activity,
            [event.target.name]: event.target.value,
        });
    }
    
    //SUBIR ACTIVIDAD Y DEJAR RESULTADOS POR DEFAULT
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addActivity(activity))
        alert("the activity has been created successfully")
        setActivity({
            name: "",
            difficult: "",
            duration: "",
            season: "",
            countries: [],
        })
    }

    const setInFormCountry = (country) => {
        setActivity({...activity, countries: country})
    }
    
    useEffect(() => {
        dispatch(getActivities())
        dispatch(getCountries())
    }, [dispatch])

    useLayoutEffect(() => {
        setErrors(Validate(activity))
    }, [activity])

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h1 className="title">Create a tourist activity</h1>
                <div>
                    <div>
                        <label htmlFor="name">Name: </label>
                    </div>
                    <input className="input" type="text" placeholder="name..." name="name" value={activity.name} onChange={handleChange} />
                    {errors.name? <p>{errors.name}</p> : <p></p>}
                </div>
                <div>
                    <div>
                        <label htmlFor="difficult">Difficult: </label>
                    </div>
                    <input className="input" type="number" placeholder="difficult..." name="difficult" value={activity.difficult} onChange={handleChange} />
                    {errors.difficult? <p>{errors.difficult}</p> : <p></p>}
                </div>
                <div>
                    <div>   
                        <label htmlFor="duration">Duration: </label>
                    </div>
                    <input className="hs" type="number" placeholder="duration in hours..." name="duration" value={activity.duration} onChange={handleChange} />
                    <span> hs</span>
                    {errors.duration? <p>{errors.duration}</p> : <p></p>}
                </div>
                <div>
                    <div>
                        <label htmlFor="season">Season: </label>
                    </div>
                    <select name="season" value={activity.season} onChange={handleChange}>
                        <option>Select season</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                    </select>
                    {errors.season? <p>{errors.season}</p> : <p></p>}
                </div>
                <div>
                    <div>
                            <label htmlFor="countries">Countries: </label>
                    </div>
                    <Checklist setInFormCountry={setInFormCountry}/>
                    {errors.countries? <p>{errors.countries}</p> : <p></p>}
                </div>

                <button disabled={errors.name || errors.difficult || errors.duration || errors.season || errors.countries} type="submit">Create</button>

            </form>            
        </div>
    )
}

export default Form;