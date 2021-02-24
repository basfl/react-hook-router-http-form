import React, { Component, useState } from 'react';
import axios from 'axios'

import cssClasses from './NewPost.module.css';



const NewPost = (props) => {
    // state = {
    //     title: '',
    //     content: '',
    //     author: 'author'
    // }
    console.log("Newpost Props",props.isAuth)
    const initial = {
        title: '',
        content: '',
        author: 'author'
    }
    const [postState, updatePost] = useState(initial)
    const postDataHandler = async () => {
        const post = {
            title: postState.title,
            body: postState.content,
            author: postState.author
        }
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
        console.log(response)

    }

    const postDataUpdateHandler = (e) => {
        const { name, value } = e.target;
        updatePost(prevState => ({
            ...prevState,
            [name]: value
        }));

    }


    return (
        <div className={cssClasses.NewPost}>
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={postState.title} name="title" onChange={postDataUpdateHandler} />
            <label>Content</label>
            <textarea rows="4" value={postState.content} name="content" onChange={postDataUpdateHandler} />
            <label>Author</label>
            <select value={postState.author} name="author" onChange={postDataUpdateHandler}>

                <option value="author1">Author1</option>
                <option value="author2">Author2</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );

}

export default NewPost;