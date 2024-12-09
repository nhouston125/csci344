import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post"

export default function Posts({ token }) {
    
    // State variables: every time a state variable gets set, it 
    // redraws the component.
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        // fetches data from /api/posts endpoint
        const data = await getDataFromServer(token, "/api/posts");
        // setting a state variable
        setPosts(data); // State variable setters always redraw the screen
    }

    // useEffect is a built-in function designed to handle "side effects" 
    // when the page first loads
    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj) {
        return <Post token={token} key={postObj.id} postData={postObj} />
    }

    return (
        <div>
            {
                posts.map(outputPost)
            }
        </div>
    );
}
