import { Link } from "react-router-dom"

export default function NotFoundPage () {
    return <div>
        <h1>Oh no, 404! Can't find this page!</h1>
        <Link to="/">Take me back to main page!</Link>
    </div>
}