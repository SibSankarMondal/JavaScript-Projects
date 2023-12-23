
async function quotes() {
    let fetchquote = await fetch("https://api.quotable.io/random");
    let response = await fetchquote.json();
    return response;
}

let button = document.querySelector("#btn");
let show = document.querySelector("#show");
let authortext = document.querySelector("#author");

button.addEventListener("click", function () {
    quotes().then(function (resolve) {
       
        let quote = resolve.content;
        let author = resolve.author;

        show.innerHTML = quote;
        authortext.innerHTML =author;
    });
});


