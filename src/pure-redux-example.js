import { createStore } from "redux";

const initState = {
    name: "react",
    lastName: "react",
};

// reducer used for two purpose
// 1) init state (on store create)
// 2) after dispatch (update state)
function reducer(state = initState, action) {
    if (action.type === "set name") {
        return { ...state, name: action.payload };
    }

    if (action.type === "set last  name") {
        return { ...state, lastNamre: action.payload };
    }

    return state; // new state
}

// create store
const store = createStore(reducer);

store.subscribe(() => {
    console.log("new state: ", store.getState());
});

// update

store.dispatch({ type: "set name", payload: "redux" });

// update
store.dispatch({ type: "set name", payload: "css" });
