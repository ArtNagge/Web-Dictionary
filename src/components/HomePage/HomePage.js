import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "../Header";

import Home from "../../pages/Home";
import Dictionary from "../../pages/Dictionary";
import Contacts from "../../pages/Contacts";
import Post from "../../pages/Post";
import AddSay from "../../pages/AddSay";
import {connect} from "react-redux";
import {setPosts} from "../../actions/postsActions";

class HomePage extends Component {

    componentDidMount() {
        this.props.setPosts()
    }

    render () {
        return (
            <Router>
                <Header/>
                <div className="container content">
                    <Route path="/" exact component={Home} />
                    <Route path="/addsay" exact component={AddSay} />
                    <Route path="/d/" exact component={Dictionary} />
                    <Route path="/d/:category" exact component={Dictionary} />
                    <Route path="/d/:category/:idPost" exact component={Post} />
                    <Route path="/contacts/" component={Contacts} />
                </div>
            </Router>
        );
    }
}

export default connect(null, {setPosts})(HomePage);