async function getBusinesses(location, search_term, num_results, open_now) { 
    // Query the Yelp API
    const endpoint = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';
    const url = `${endpoint}?location=${location}&term=${search_term}&limit=${num_results}&open_now=${open_now}`;
    
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Return a list of business objects matching the query
    const data = await response.json();
    console.log(data);
    return data;
}

function businessToHTML(businessObj) {
    // Return an html representation of the business
    return `
        <section class="card">
            <h2>${businessObj.name}</h2>
            <img class="pic" src="${businessObj.image_url}" alt="Picture of restaurant">
            <p>${businessObj.display_address}</p>
            <table>
                <tr>
                    <td>Price:</td>
                    <td class="table">${businessObj.price}</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td class="table">${businessObj.rating}</td>
                </tr>
                <tr>
                    <td># of Reviews:</td>
                    <td class="table">${businessObj.review_count}</td>
                </tr> 
            </table>
        </section>`;
}

const search = async (ev) => {
    // Get user's preferences
    const location = document.querySelector("#location").value;
    const search_term = document.querySelector("#term").value;
    const open_only = document.querySelector("#is_open").checked;

    // Pass the user's preferences into the showData function
    await showData(location, search_term, open_only)
};


const showData = async (location, search_term, open_only) => {
    // Fetch businesses
    let businesses = await getBusinesses(location, search_term, 9, open_only);

    const resultsEl = document.querySelector("#results");

    resultsEl.innerHTML = '';

    // Display each business card
    businesses.forEach(business => {
        const businessHTML = businessToHTML(business);
        resultsEl.innerHTML += businessHTML;
    });
};