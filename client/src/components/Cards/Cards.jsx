import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/actions"


const Cards = () => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    const page = useSelector((state) => state.page);
    const itemsPerPage = 10;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = countries.slice(start, end);

    const handleChange = (pageNumber) => {
        dispatch(changePage(pageNumber));
    }

    return (
        <div>
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
            <button onClick={() => handleChange(page - 1)}>🡸</button>
            <button onClick={() => handleChange(page + 1)}>🡺</button>
        </div>
    )
}

export default Cards;