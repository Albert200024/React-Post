import PostList from "./PostList";
import { useEffect, useState } from 'react';

export default function Post(){
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3300/posts')
          .then(res => {
              if (!res.ok) {
                throw new Error('Failed to fetch posts');
              }

              return res.json();
          })
          .then((data) => {
            setPosts(data)
          })
          .catch(error => {
            setError(error.message);
        });
    }, [])

    

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {posts && <PostList posts = {posts} />}
        </div>
    )
}