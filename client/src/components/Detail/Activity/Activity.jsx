import "../Detail.css"

const Activity = ({name, difficult, duration, season}) => {
    return(
        <div className="Activity">
            <h1 className="actName">Activity</h1>
            <h2 className="h2act">Name: <b className="bact">{name}</b></h2>
            <h2 className="h2act">Difficulty: <b className="bact">{difficult}</b></h2>
            <h2 className="h2act">Duration: <b className="bact">{duration}</b></h2>
            <h2 className="h2act">Season: <b className="bact">{season}</b></h2>
        </div>
    )
}

export default Activity;