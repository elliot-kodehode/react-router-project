import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom"

export default function BookListPage () {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://gutendex.com/books/");
            setData(result.data.results);
        };
        fetchData();
    }, []);

    return (
        <>
           <h1>List of books</h1>
           <ul>
           {data?.map((book) => (
            <li key={book.id}>
               <Link to={`/books/${book.id}`} key={book.id} >{book.title}</Link>
            </li>
            ))}
            </ul>
        </>
           )
}