import React, {Component} from 'react';
import { Provider } from 'mobx-react';
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