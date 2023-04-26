import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/players/list">Manage Players</Link>
                <Link to="/status/game/1">Manage Player Status</Link>
            </nav>
        </>
    );
}
export default Nav;