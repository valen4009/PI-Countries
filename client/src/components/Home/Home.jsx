import "./Home.css"
import Cards from "../Cards/Cards";
import FilterAndOrders from "../FiltersAndOrders/FiltersAndOrders";

const Home = () => {
    return (
        <div className="home">
            <div className="filters">
                <FilterAndOrders/>
            </div>
            <Cards/>
        </div>
    )
}

export default Home