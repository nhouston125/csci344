import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Suggestion from "./Suggestion"

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
        const data = await getDataFromServer(token, "/api/suggestions");
        setSuggestions(data);
    }

    useEffect(() => {
        getSuggestions();
    }, []);


    return (
        <div className="mt-4"> 
            <header className="flex gap-4 items-center"> 
                <p className="text-base text-gray-400 font-bold mb-4">Suggestions for you</p>
            </header>
            <div className="mt-4"> 
              {suggestions.map((suggestion) => ( 
                <Suggestion key={suggestion.id} suggestionData={suggestion} /> 
                ))} 
            </div> 
        </div>
        
    );
}
