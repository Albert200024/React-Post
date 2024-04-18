import React from 'react';
import "./css/postList.css"
import "./css/postListMedia.css"

export default function PostList({ posts }) {
    return (
        <div className="posts-list containerWidth">
            {posts.map(post => {
                console.log('Image URL:', post.image);
                return (
                    <div className="post" key={post.blogs_id}>
                        <div className='imageBlock'>
                             <img src={require(`../img/${post.image}`)} alt="Nkare chi gtnvel" />     
                        </div>
                        <div className='textBlock'>
                            <p className='textBlockType'>{post.type}</p>
                            <h2 className='textBlockTitle'>{post.title}</h2>

                            <div className='textBlockInfo'>
                                <span>{post.name}</span>
                                <div className='textBlockInfoItem'><div className='textBlockInfoItemTochka'></div>April 8, 2018</div>
                                <div className='textBlockInfoItem'><div className='textBlockInfoItemTochka'></div>April 8, 2018</div>
                            </div>
                            <p className='textBlockDesciption'>{post.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
