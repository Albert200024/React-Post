import PostList from "./PostList";
import { useEffect, useState } from 'react';


export default function Post(){
    const [posts, setPosts] = useState(null)

    const handleDelete = (id) => {
       const newPosts = posts.filter(user => user.id !== id)
       setPosts(newPosts);

   
    }

    useEffect(() => {
        fetch('http://localhost:3300/posts')
          .then(res => {
              return res.json()
          })
          .then((data) => {
            setPosts(data)
          })
    }, [])

      console.log(posts)

    return (
        <div>
            <h1>Post Component</h1>
            {posts && <PostList posts = {posts} />}
        </div>
    )
}