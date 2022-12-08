import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice } from "./store/store";

// useSelector subscribe to  slice of store
function App() {
    const posts = useSelector((state: any) => {
        return state.posts.data;
    });

    

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((body) => {
                console.log("body", body);
                dispatch(postsSlice.actions.setPosts(body));
            });
    }, [dispatch]);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               {posts.map((post: any) => {
                return <div key={post.id}>{post.title}</div>
               })}
            </header>
        </div>
    );
}

export default App;
