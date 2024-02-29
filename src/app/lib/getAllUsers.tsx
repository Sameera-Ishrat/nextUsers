import React from 'react';

const url = `https://jsonplaceholder.typicode.com/users`;

export const getAllUsers = async() => {

    const response = await fetch(url);
    if(!response.ok) {
        throw new Error("Failed to get all users")
    }
    const data = response.json();
    return data; 
}
