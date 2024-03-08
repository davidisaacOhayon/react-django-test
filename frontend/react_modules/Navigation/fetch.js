
// This is used to fetch API data.


export const FetchAPI = (url) =>{ 
    return fetch(url) // send get request to url
    .then((res) => {
        console.log(`URL Passed - ${url}`); // Log URL passed
        if(!res.ok){  // Check if response was successful
         console.error("Response is not okay", res.status);
         throw new Error("Response is not okay."); // Throw error
        }else{
            return res.json(); // Parse Response data to JSON
        }
    })
    .catch((error) => console.error("There was an error: ", error));
}