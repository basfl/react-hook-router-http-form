import React from 'react';

import  cssClasses from './Post.module.css';

const post = (props) => (
    <article className={cssClasses.Post} onClick={props.postClick}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post