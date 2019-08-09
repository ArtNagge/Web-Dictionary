import axios from "axios";

function setPosts() {
    return (dispatch) => {
        axios.get('http://localhost/api/posts')
            .then(payload => dispatch({type: "SET:POSTS", payload: payload.data}));
    }
}

function setCurrentPage(payload) {
    return {type: 'SET:CURRENT_PAGE', payload}
}

export {
    setCurrentPage,
    setPosts
}