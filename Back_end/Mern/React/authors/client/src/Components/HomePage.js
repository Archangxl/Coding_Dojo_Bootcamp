import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const HomePage = (props) => {

    const [authors, setAuthors] = useState([]);

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
                            <th className="authorTh">Author</th>
                            <th colSpan={2}>Actions Avaliable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{author.authorName}</td>
                                        <td className="link"><Link className="linkElement" to={'/' + author._id}>Edit</Link></td>
                                        <td><DeleteButton id={author._id} /></td>
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