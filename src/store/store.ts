import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
    },
    reducers: {
        setUser: (state, action) => {
            console.log("action", action);
            state.data = action.payload;
        },
    },
});
export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: [1, 2, 3],
    },
    reducers: {
        setPosts: (state, action) => {
            state.data = action.payload;
        },
    },
});

const store = configureStore({
    reducer: combineReducers({
        user: userSlice.reducer,
        posts: postsSlice.reducer,
    }),
});

export { store };
