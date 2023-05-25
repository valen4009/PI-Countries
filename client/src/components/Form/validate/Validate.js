const Validate = (activity) => {
    let errors = {};

    if(!activity.name){errors.name = "please complete this field"}
    if(activity.difficult < 1 || activity.difficult > 10){errors.difficult = "please enter a value between 1 and 10"}
    if(activity.duration < 1){errors.duration = "please put a duration"}
    if(activity.season !== "summer" && activity.season !== "autumn" && activity.season !== "winter" && activity.season !== "spring"){errors.season = "please enter a valid season"}
    if(activity.countries.length === 0){errors.countries = "please select a country"}

    return errors;
}

export default Validate