import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts, onDelete, onLike, onImportant}) => {
    const elements = posts.map(post => {
        return(
            <PostListItem 
                title={post.title} 
                important={post.important}
                like={post.like}

                onDelete={() => onDelete(post.id)}
                onLike={() => onLike(post.id)}
                onImportant={() => onImportant(post.id)}

                key={post.id}
            />
        )
    }) 

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;