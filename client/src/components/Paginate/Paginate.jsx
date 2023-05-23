import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/actions"

const Paginate = () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);
    const countries = useSelector((state) => state.countries);
    const totalPages = countries.length / 10;

    const handleChange = (pageNumber) => {
        dispatch(changePage(pageNumber));
    }

    return (
        <div>
            { page > 1 ? 
                <>
                    <button onClick={() => handleChange(page - 1)}>🡸</button>
                    <label>{page - 1}-</label>
                </> 
             : null
            }
            <label>{page}</label>
            { page < totalPages ? 
                <>
                    <label>-{page + 1}</label>
                    <button onClick={() => handleChange(page + 1)}>🡺</button>
                </> 
             : null
            }
        </div>
    )
}

export default Paginate