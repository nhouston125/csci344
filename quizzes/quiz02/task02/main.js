// 1. Create your businessToHTML function here:

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
                    <td># Reviews:</td>
                    <td class="table">${businessObj.review_count}</td>
                </tr> 
            </table>
        </section>`;
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

const businessObjPriceDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    price: "$$",
    review_count: 1257,
};

const businessObjPriceNotDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    review_count: 1257,
};


console.log("HTML representation of a business:", businessToHTML(businessObjPriceDefined));
console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));

