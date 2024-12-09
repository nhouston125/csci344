import React, {useState} from "react";

import { postDataToServer } from "../server-requests";
import { deleteDataFromServer } from "../server-requests";

export default function Bookmark({ token, bookmarkId, postId }) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        const sendData = {
            post_id: postId,
        };
        // Send a HTTP post request to create a bookmark
        const responseData = await postDataToServer(token, "/api/bookmarks", sendData);
        console.log(responseData);
        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        const url = '/api/bookmarks/' + stateBookmarkId;
           // Send a HTTP post request to delete a bookmark
        const responseData = await deleteDataFromServer(token, url);
        console.log(responseData);
        setStateBookmarkId(null);
    }

    if (stateBookmarkId){
        return (
            <button 
                ariaLabel="Unbookmark This Post" 
                ariaChecked="true" 
                ariaRole="toggle" 
                onClick={deleteBookmark}
            >
                <i className="fas fa-bookmark"></i>
            </button>
        );
    } else {
        return (
            <button 
                ariaLabel="Bookmark This Post" 
                ariaChecked="false" 
                ariaRole="toggle"
                onClick={createBookmark}>
                <i className="far fa-bookmark"></i>
            </button>
        );
    }
}