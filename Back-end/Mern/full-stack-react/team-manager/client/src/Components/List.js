import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const List = () => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setAllPlayers(res.data);
            })
            .catch(err => console.log(err));
    })

    const deletePlayer = (id) => {
        axios.delete('http://localhost:8000/api/deletePlayer/' + id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <>
        <header>
            <div className="width-container">
                <p><Link to="/players/list">List</Link> | <Link to="/players/addPlayers">Add Player</Link></p>
            </div>
        </header>

        <main>
            <div className="width-container">
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preffered Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPlayers.map((player, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{player.playerName}</td>
                                        <td>{player.preferredPosition}</td>
                                        <td><button onClick={(e) => deletePlayer(player._id)} >Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </main>
        
        </>
    );


}
export default List;