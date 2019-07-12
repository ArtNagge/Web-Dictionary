import React, {useState, useEffect} from 'react';
import apiWorker from '../../utils/apiWorker';

const InfoPost = ({navigate}) => {

    useEffect(
        () => {
            console.log(navigate);
        }
    );

    return (
        <div className={"ListItems InfoPost"}>
            111
        </div>
    );

};

export default InfoPost;