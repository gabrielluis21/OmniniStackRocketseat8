import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';

import './Main.css';
import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function Main( { match } ){
    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function getUsersList(){
            const response = await Api.get('/devs', {
                headers: {
                    user: match.params.id,
                },
            });
            setUsers(response.data);
        }
        getUsersList();
    }, [match.params.id]
    );

    async function handleLike(id){
        await Api.post(`/devs/${id}/like`, null, {
            headers: {
                user: match.params.id,
            },
        });
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id){
        await Api.post(`/devs/${id}/dislike`, null, {
            headers: {
                user: match.params.id,
            },
        });
        setUsers(users.filter(user => user._id !== id));
    }

    return (
       <div className="main-container">
           <Link>
                <img src={logo} alt="Tindev"/>
           </Link>
           {users.length > 0 ? (
               <ul>
               {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name}/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button" onClick={() => handleLike(user._id)}>
                                <img src={like} alt="Dislike"/>
                            </button>
                        </div>
                    </li>
               ))}
           </ul>
           ) : (
               <div className="empty">
                   Acabou :( 
               </div>
           )}
           
       </div> 
    );
}