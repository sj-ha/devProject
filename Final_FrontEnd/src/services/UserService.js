import React from 'react';
import axios from 'axios';

export default function UserService(){

    axios.get("http://localhost:8080/user/1")
    .then(
        (res) => {
            return res.data
        }
    )
    .catch(
        (res) => {
            console.error(res);
        }
    );
}