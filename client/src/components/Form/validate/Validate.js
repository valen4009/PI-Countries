const Validate = (data) => {
    let errors = {};

    if(!data.name){errors.name = "please complete this field"}
    if(data.difficult < 1 || data.difficult > 10){errors.difficult = "please enter a value between 1 and 10"}
    if(data.duration < 1){errors.duration = "please put a duration"}
    if(data.season !== "summer" && data.season !== "autumn" && data.season !== "winter" && data.season !== "spring"){errors.season = "please enter a valid season"}
    if(data.countries.length === 0){errors.countries = "please select a country"}

    return errors;
}

export default Validate