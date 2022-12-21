import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            OOPs Page is not Found !! Sorry
            <br/>
            To go back home, click <Link to="/"> here </Link>
        </div>
    )
}

export default NotFound;