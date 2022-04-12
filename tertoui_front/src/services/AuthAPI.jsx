// import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

/* API Methods */
// export function hasAuthenticated() {
//     const token = getItem('sessionToken');
//     const result = token ? tokenIsValid(token) : false;

//     if (false === result) {
//         removeItem('sessionToken');
//     }

//     return result;
// }

// export function login(credentials) {
//     return axios
//         .post('http://localhost:8080/api/login_check', credentials)
//         .then(response => response.data.token)
//         .then(token => {
//             addItem('sessionToken', token);

//             return true;
//         });
// }

// export function logout() {
//     removeItem('sessionToken');
// }

// function tokenIsValid(token) {
//     const { exp: expiration } = jwtDecode(token);

//     if (expiration * 1000 > new Date().getTime()) {
//         return true;
//     }

//     return false;
// }

export function hasAuthenticated() {
    const token = getItem('sessionToken');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('sessionToken');
    }

    return result;
}

export function login(credentials) {
    addItem('sessionToken', 'tokenSample');
    return true;
};

export function logout() {
    removeItem('sessionToken');
}

function tokenIsValid(token) {
    // const { exp: expiration } = jwtDecode(token);

    // if (expiration * 1000 > new Date().getTime()) {
    //     return true;
    // }

    return true;
}
