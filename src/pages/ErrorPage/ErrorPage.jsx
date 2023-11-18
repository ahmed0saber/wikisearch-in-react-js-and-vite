import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to={"/"}>Back to home page</Link>
        </div>
    )
}
