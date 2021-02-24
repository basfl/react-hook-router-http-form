import React, { useEffect, useState } from 'react'
import cssClasses from './Blog.module.css'
import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Form from '../../components/Forms/FormikForm/Form';
import NormalForm from '../../components/Forms/NormalForm/NormalForm';
import { Route, Link, Switch } from 'react-router-dom'
import ReactHookForm from '../../components/Forms/ReactHookForm/ReactHookForm';
const Blog = (props) => {

    const [posts, setPostsState] = useState([])
    const [selectedPostId, setSelectedPostIdState] = useState(null)
 
    useEffect(async () => {
        const results = await axios.get("https://jsonplaceholder.typicode.com/posts");
        //console.log("fetch data->" + JSON.stringify(results))
        const posts = results.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: "babak"
            }
        });
        setPostsState(updatedPosts)
    }, [])
    const postSelectedHandler = (id) => {
        console.log("click id=", id)
        setSelectedPostIdState(id)

    }
    const post = posts.map(post => {
        return (
            <Post key={post.id}
                title={post.title}
                author={post.author}
                postClick={postSelectedHandler.bind(null, post.id)} />
        )
    })
    return (
        <div className={cssClasses.Blogs}>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to={{
                            pathname: "/newPost",
                            search: "?quick-submit"
                        }}>New Post</Link></li>
                        <li><Link to={{
                            pathname: "/fullPost"
                        }}>fullpost</Link></li>
                        <li><Link to={{
                            pathname: "/formik"
                        }}>formik</Link></li>

                        <li><Link to={{
                            pathname: "/react-hook-form"
                        }}>React-Hook_Form</Link></li>

                        <li><Link to={{
                            pathname: "/normal-form"
                        }}>normal-form</Link></li>

                    </ul>
                </nav>
            </header>


                    <Route path="/" exact render={() =>
                    (
                        <div>
                            <section className={cssClasses.Posts}>
                                {post}
                            </section>
                            <section>
                                <FullPost id={selectedPostId} />
                            </section>
                        </div>
                    )
                    } />
                    <Route path="/newPost" component={NewPost} />
                    <Route path="/fullPost" render={() => {
                        return (
                            <FullPost id={selectedPostId} />
                        )

                    }
                    } />
                    <Route path="/formik">
                        <Form p="a" />
                    </Route>

                    <Route path="/react-hook-form">
                        <ReactHookForm />
                    </Route>

                    <Route path="/normal-form">
                        <NormalForm />
                    </Route>


                    {/* <Route path="/newPost" component={NewPost}/> */}


                    {/* <section>
                <FullPost id={selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section> */}

        </div>

    )

}


export default Blog