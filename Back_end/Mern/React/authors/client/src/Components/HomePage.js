import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const HomePage = (props) => {

    const [authors, setAuthors] = useState([]);
    const {deleteAuthorFunction} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    })
    
    return (
        <>
            <main>  
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Avaliable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{author.authorName}</td>
                                        <td> <Link to={'/' + author._id} >Edit</Link>| <button>Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </main>
        </>
    );

}
export default HomePage;