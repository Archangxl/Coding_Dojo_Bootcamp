import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const HomePage = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    })

    const deleteAuthor = id => {
        axios   
            .delete('http://localhost:8000/api/deleteAuthor/'+id)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }
    
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
                                        <td className="link"><Link to={'/' + author._id} ><span>Edit</span></Link></td>
                                        <td><button onClick={(e)=> deleteAuthor(author._id)}>Delete</button></td>
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