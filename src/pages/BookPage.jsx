import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function BookPage () {
    const { bookId } = useParams()
    const [bookData, setBookData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://gutendex.com/books/${bookId}`)
            console.log(result)
            setBookData(result.data)
        }
        fetchData()
    }, [])

    const getCoverImage = () => {
       const Image = bookData?.formats["image/jpeg"]
       if (Image) {
        return Image
       }
    }

    return (
        <>
           <img src={getCoverImage()}></img>
           <h1 style={{
                fontSize: "56px"}}>{bookData?.title}</h1>
           <h3>Author(s)</h3>
           <div>
            {bookData?.authors.map((author, i) => (
                <p key={i}
                   style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontWeight: "500"
                   }}>{author.name}</p>
            ))}
           </div>
           <a href={`https://www.gutenberg.org/cache/epub/${bookId}/pg${bookId}-images.html`}
              style={{
                textDecoration: "none",
                color: "black",
                width: "fit-content",
                border: "2px solid black",
                borderRadius: "4px",
                padding: "4px",



           }}>Read the book</a>

        </>)
}