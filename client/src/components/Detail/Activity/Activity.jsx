const Activity = ({name, difficult, duration, season}) => {
    return(
        <div>
            <h2>Activity</h2>
            <p>Name: {name}</p>
            <p>Difficulty: {difficult}</p>
            <p>Duration: {duration}</p>
            <p>Season: {season}</p>
            
        </div>
    )
}

export default Activity;