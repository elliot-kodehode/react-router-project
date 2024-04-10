import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import NotFoundPage from "./NotFoundPage";

export default function BookListPage () {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // const apiLink = import.meta.env.VITE_SECRET_API;
    // console.log(apiLink)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result = await axios(import.meta.env.VITE_SECRET_API);
                console.log(result)
                setData(result.data.results);
                setIsLoading(false)
            } catch (e) {
                setError(e.message)
            }
        };
        fetchData();
    }, []);
    
    if (error) return <NotFoundPage msg={error} />
    if (isLoading) return <h1>Books are loading...</h1>

    return (
        <>
           <h1>List of books</h1>
           <ul>
           {data?.map((book) => (
            <li key={book.id}>
               <Link to={`/react-router-project/books/${book.id}`} key={book.id} >
               <img src={book.formats["image/jpeg"]} />
               </Link>
            </li>
            ))}
            </ul>
        </>
           )
}