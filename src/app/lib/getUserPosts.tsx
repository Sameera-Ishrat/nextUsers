import React from 'react';


export const getUserPosts = async(userId:string) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{next:{revalidate:60}});
    if(!response.ok)  return undefined;
    const data = response.json();
    return data; 
}