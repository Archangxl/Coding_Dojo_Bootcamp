import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const List = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setAllPlayers(res.data);
                console.log(allPlayers);
            })
            .catch(err => console.log(err));
    })

    return (
        <>
        <header>
            <Link to="/players/list">List</Link>
            <Link to="/players/addPlayers">Add Player</Link>
        </header>

        <main>

            <table>

            </table>

        </main>
        
        </>
    );


}
export default List;