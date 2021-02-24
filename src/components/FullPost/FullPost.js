import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'

import cssClasses from './FullPost.module.css';

const FullPost = (props) => {

    const [loadedPost, setLoadedPost] = useState(null)

    useEffect(() => {
        console.log("component did mount when id changed! ..fetching-->fullpost for ", props.id)
        if (props.id) {
            if (!loadedPost || (loadedPost && loadedPost.id !== props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + props.id)
                    .then(response => {
                        console.log(response);
                        setLoadedPost(response.data)
                    });
            }
        }

    }, [props.id])


    const deleteDataHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + props.id)
            .then(response => {
                console.log(response);

            });

    }

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (props.id) {
        post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (loadedPost) {
        post = (
            <div className={cssClasses.FullPost}>
                FullPost {props.id}
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className={cssClasses.Edit}>
                    <button className="Delete" onClick={deleteDataHandler}>Delete</button>
                </div>
            </div>

        );
    }

    return post;

}

export default FullPost;