import React from 'react'
import { getUserPosts } from '../lib/getUserPosts'

type Props = {
    promise: Promise<Posts[]>
}

export const UserPost = async({promise}:Props) => {
    
const posts = await promise;
console.log(posts,"posts");

  return (
    <div>
        {posts.map((post) => (
            <>
<h2 key={post.id}>{post.title}</h2>
            <div>{post.body}</div>
            </>
            
        ))}
    </div>
  )
}
