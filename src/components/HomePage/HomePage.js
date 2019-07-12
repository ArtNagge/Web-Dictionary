import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "../Header";

import Home from "../../pages/Home";
import Dictionary from "../../pages/Dictionary";
import NoDictionary from "../../pages/NoDictionary";
import Contacts from "../../pages/Contacts";
import Post from "../../pages/Post";

export default class HomePage extends Component {
    render () {
        return (
            <Router>
                <Header/>
                <div className="container content">
                    <Route path="/" exact component={Home} />
                    <Route path="/dictionary/" exact component={NoDictionary} />
                    <Route path="/dictionary/:category" exact component={Dictionary} />
                    <Route path="/dictionary/:category/:idPost" exact component={Post} />
                    <Route path="/contacts/" component={Contacts} />
                </div>
            </Router>
        );
    }
};