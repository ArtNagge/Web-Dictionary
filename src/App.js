import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import HomePage from "./components/HomePage";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomePage/>
            </Provider>
        );
    }
}