import React from 'react';

import image from "../img/image1.png"

export default function PostList({ posts }) {
    return (
        <div className="posts-list">
            <img src={image} alt="" />
            <div>
                {posts.map((post) => (
                    <div className="user-preview" key={post.blogs_id}>
                        <img src={post.image} alt="Nkare chi gtnvel" />
                        <h2>{post.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}