import { useEffect, useState } from "react";
import axios from 'axios';

const HomePage = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    })
    
    return (
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
                                    <td>Actions</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </main>
    );

}
export default HomePage;