// 1. Create your getBusinesses function here:

async function getBusinesses(location, search_term, num_results) {
    // Query the Yelp API
    const endpoint = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';
    const url = `${endpoint}?location=${location}&term=${search_term}&limit=${num_results}`;
    
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Return a list of business objects matching the query
    const data = await response.json();
    console.log(data);
    return data.businesses;
    
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);

