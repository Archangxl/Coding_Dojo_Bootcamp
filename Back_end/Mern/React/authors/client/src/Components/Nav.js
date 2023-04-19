import { Link } from "react-router-dom";

const Nav = () => {


    return (
        <nav>
            <h1>Favorite Authors</h1>
            <div>
                <Link className="nav" to={'/'}>Home</Link>
                <Link className="nav" to={'/create'}>Add an Author</Link>
            </div>
        </nav>
    );

}
export default Nav;