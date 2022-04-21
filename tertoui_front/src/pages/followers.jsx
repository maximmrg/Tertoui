import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import {ReactSession} from 'react-client-session';


export function Followers (props) {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        var user;

        async function getFollowers() {
            ReactSession.setStoreType("localStorage");
        
            var url = "http://localhost:8080/users/" + ReactSession.get('id') + "/followers";
        
            await fetch(url, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            }).then(response => response.json())
            .then(response => {

                response.map((user) => {
                    getUserById(user);
                })
            });

            console.log(followers)

        }
        
        async function getUserById(id){
            var url = "http://localhost:8080/users/" + id;

            await fetch(url, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            }).then(response => response.json())
            .then(response => {
                user = response;
                setFollowers([...followers, user])
        
            })     
        }
        
        getFollowers();

        //console.log(followers)

        }, [])


    return(
            <div className='container App mt-3'>
                <h2>Your followers</h2>

                <ul className='list-group list-group-flush mt-3'>
                {followers.map((follower) => (
                    
                    <li className='list-group-item'>{follower.username}</li>
                    
                ))}
                </ul>
            </div>
    )
}