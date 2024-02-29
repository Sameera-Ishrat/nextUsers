import React from 'react';


export const getUser = async(userId:string) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if(!response.ok) return undefined;
    const data = response.json();
    return data; 
}