import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import FilterAndOrders from "../FiltersAndOrders/FiltersAndOrders";


const Home = () => {

    return (
        <div>
            <SearchBar/>
            <FilterAndOrders/>
            <Cards/>
        </div>
    )
}

export default Home