import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav>
                <p><Link className='link' to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link></p>
            </nav>
        </>
    );
}
export default Nav;