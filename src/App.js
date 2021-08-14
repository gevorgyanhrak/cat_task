import React from "react";
import {BrowserRouter as Router,} from "react-router-dom";

import './App.scss';

import {Provider} from "react-redux";
import store from "./store/store";
import {Sections} from "./components";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="cat_wrapper">
                        <Sections/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
