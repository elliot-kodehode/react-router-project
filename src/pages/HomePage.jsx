import { Link } from "react-router-dom"

export default function HomePage() {
    return (
    <div>
        <h1>Welcome!</h1>
        <Link to="/react-router-project/books">Go to list page!</Link>
    </div>
)}