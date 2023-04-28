import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Statuses = () => {

    const {id} = useParams("");
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setAllPlayers(res.data);
            })
            .catch(err => console.log(err));
    })

    const changeStatusGameOne = (id, status) => {
        axios.put("http://localhost:8000/api/updatePlayer/" + id, {gameOne: status})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    const changeStatusGameTwo = (id, status) => {
        axios.put("http://localhost:8000/api/updatePlayer/" + id, {gameTwo: status})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    const changeStatusGameThree = (id, status) => {
        axios.put("http://localhost:8000/api/updatePlayer/" + id, {gameThree: status})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <>
            <header>
                <div className="width-container">
                    <h1>Player Status - Game {id}</h1>
                    <p><Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link></p>
                </div>
            </header>

            <main>
                <div className="width-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Statuses</th>
                            </tr>
                        </thead>
                        <tbody>
                { id.toString() !== "1" ? null :
                <>
                    {
                        allPlayers.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.playerName}</td> 
                                    <td>
                                    {
                                        player.gameOne === "Playing" ? 
                                        <button className="playing-status">Playing</button> 
                                        :
                                        <button onClick={(e) => changeStatusGameOne(player._id, "Playing")}>Playing</button>
                                    }
                                    {
                                        player.gameOne === "Not Playing" ? 
                                        <button className="notPlaying-status">Not Playing</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameOne(player._id, "Not Playing")}>Not Playing</button>
                                    }
                                    {
                                        player.gameOne === "Undecided" ? 
                                        <button className="undecided-status">Undecided</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameOne(player._id, "Undecided")}>Undecided</button>
                                    }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </> 
                }
                { id.toString() !== "2" ? null :
                <>
                    {
                        allPlayers.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.playerName}</td> 
                                    <td>
                                    {
                                        player.gameTwo === "Playing" ? 
                                        <button className="playing-status">Playing</button> 
                                        :
                                        <button onClick={(e) => changeStatusGameTwo(player._id, "Playing")}>Playing</button>
                                    }
                                    {
                                        player.gameTwo === "Not Playing" ? 
                                        <button className="notPlaying-status">Not Playing</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameTwo(player._id, "Not Playing")}>Not Playing</button>
                                    }
                                    {
                                        player.gameTwo === "Undecided" ? 
                                        <button className="undecided-status">Undecided</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameTwo(player._id, "Undecided")}>Undecided</button>
                                    }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </> 
                }

                { id.toString() !== "3" ? null :
                <>
                    {
                        allPlayers.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.playerName}</td> 
                                    <td>
                                    {
                                        player.gameThree === "Playing" ? 
                                        <button className="playing-status">Playing</button> 
                                        :
                                        <button onClick={(e) => changeStatusGameThree(player._id, "Playing")}>Playing</button>
                                    }
                                    {
                                        player.gameThree === "Not Playing" ? 
                                        <button className="notPlaying-status">Not Playing</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameThree(player._id, "Not Playing")}>Not Playing</button>
                                    }
                                    {
                                        player.gameThree === "Undecided" ? 
                                        <button className="undecided-status">Undecided</button> 
                                        : 
                                        <button onClick={(e) => changeStatusGameThree(player._id, "Undecided")}>Undecided</button>
                                    }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </> 
                }   
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );

}
export default Statuses; 