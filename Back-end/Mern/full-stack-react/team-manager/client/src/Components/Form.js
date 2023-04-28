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
                if (err.response.data.errors.playerName !== undefined) {
                    setPlayerNameErrors(err.response.data.errors.playerName.message);
                } else {
                    setPlayerNameErrors(undefined);
                }
                if (err.response.data.errors.preferredPosition !== undefined) {
                    setPreferredPositionErrors(err.response.data.errors.preferredPosition.message);
                } else {
                    setPreferredPositionErrors(undefined);
                }
            });
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
                    <form onSubmit={formSubmitition}>
                        <p>{playerNameErrors}</p>
                        <label>Player Name: </label>
                        <input type="text" onChange={(e) => setPlayerName(e.target.value)}></input>

                        <p>{preferredPositionErrors}</p>
                        <label>Preferred Position: </label>
                        <input type="text" onChange={(e) => setPreferredPosition(e.target.value)}></input>

                        <button>Add</button>
                    </form>
                </div>
            </main>
        </>
    );

}
export default Form;