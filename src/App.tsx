import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice, userSlice } from "./store/store";

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
    }, []);

    console.log("posts", posts);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;