import React from 'react';

const MainContent = (props) => {
    const {style} = props;
    return (
        <main className="mainContent" style={style}>
            {props.children}
        </main>
    )
};

export default MainContent;