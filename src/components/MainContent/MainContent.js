import React, {Component} from 'react';

export default class MainContent extends Component {
    render() {
        const {style} = this.props;
        return (
            <main className="mainContent" style={style}>
                {this.props.children}
            </main>
        );
    }
}