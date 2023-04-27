import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {

    const [playerName, setPlayerName] = useState();
    const [preferredPosition, setPreferredPosition] = useState();
    const [playerNameErrors, setPlayerNameErrors] = useState();
    const [preferredPositionErrors, setPreferredPositionErrors] = useState();
    const navigate = useNavigate();

    const formSubmitition = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/newPlayer", {playerName, preferredPosition})
            .then(res => {
                console.log(res);
                navigate('/players/list')
            })
            .catch(err => {
                if (err.response.data.errors.playerName !== null) {
                    setPlayerNameErrors(err.response.data.errors.playerName.message);
                    if (err.response.data.errors.preferredPosition !== null) {
                        setPreferredPositionErrors(err.response.data.errors.preferredPosition.message);
                    }
                }
                else if (err.response.data.errors.preferredPosition !== null) {
                    setPreferredPositionErrors(err.response.data.errors.preferredPosition.message);
                }
            });
    }

    return (
        <>
            <header>
                <Link to="/players/list">List</Link>
                <Link to="/players/addPlayers">Add Player</Link>
            </header>

            <main>
                <form onSubmit={formSubmitition}>
                    <p>{playerNameErrors}</p>
                    <label>Player Name: </label>
                    <input type="text" onChange={(e) => setPlayerName(e.target.value)}></input>

                    <p>{preferredPositionErrors}</p>
                    <label>Preferred Position: </label>
                    <input type="text" onChange={(e) => setPreferredPosition(e.target.value)}></input>

                    <button>Add</button>
                </form>
            </main>
        </>
    );

}
export default Form;