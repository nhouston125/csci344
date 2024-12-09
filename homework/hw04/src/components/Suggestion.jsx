import React from "react";

export default function Suggestion({ suggestionData }) {
    return (
        <section class="flex justify-between items-center mb-4 gap-2">
                <img src={suggestionData.thumb_url} class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">{suggestionData.username}</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>
    );
}
