//fre 21 maj. 

//Del 3.  fetch

const URL="https://randomfox.ca/floof/";

//inserts img element into document body. 
function insertImageOfFox(imageSrcUrl) {
    const foxImage=document.createElement("img");
    foxImage.src=imageSrcUrl;
    document.body.appendChild(foxImage);
}

// called when json data is loaded 
function whenJsonIsDone(data) {
    console.log(data.image);
    insertImageOfFox(data.image);
}

//called when fetch is done. 
function whenFetchIsDone(response) {
    response.json().then(whenJsonIsDone);

}

fetch(URL).then(whenFetchIsDone);

