import "./Cards.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";

const Cards = () => {
    const countries = useSelector((state) => state.countries);

    //PAGINADO
    const page = useSelector((state) => state.page);
    const itemsPerPage = 10;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = countries.slice(start, end);


    return (
        <div>
            <div className="cards">
                {
                    pageItems.map(({ id, name, image, region }) => {
                        return (
                            <Card
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            region={region}
                            />
                        )
                    })
                }
            </div>
            <div>
                <Paginate/>
            </div>
        </div>
    )
}

export default Cards;