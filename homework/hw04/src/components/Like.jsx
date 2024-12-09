import React, {useState} from "react"

import { postDataToServer } from "../server-requests";
import { deleteDataFromServer } from "../server-requests";

export default function Like({ token, likeId, postId }) {
    const [stateLikeId, setStateLikeId] = useState(likeId);

    async function createLike() {
        const sendData = {
            post_id: postId,
        }
        // Send a HTTP post request to create a like
        const responseData = await postDataToServer(token, "/api/likes", sendData);
        console.log(responseData);
        setStateLikeId(responseData.id);
    }
    
    async function deleteLike() {
        const url = '/api/likes/' + stateLikeId;
            // Send a HTTP post request to delete a like
        const responseData = await deleteDataFromServer(token, url);
        console.log(responseData);
        setStateLikeId(null);
        
    }

    if (stateLikeId){
        return (
            <button
                ariaLabel="Unliked This Post"
                ariaChecked="true"
                ariaRole="toggle"
                onClick={deleteLike}>
                <i className="fas text-red-700 fa-heart"></i>
            </button>
        );
    } else {
        return (
            <button
                ariaLabel="Unliked This Post"
                ariaChecked="true"
                ariaRole="toggle"
                onClick={createLike}>
                <i className="far fa-heart"></i>
            </button>
        );
    }
}