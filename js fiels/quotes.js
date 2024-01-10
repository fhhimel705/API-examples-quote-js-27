function kanyeRest(){
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => {
        const quote = document.getElementById("quote");
        quote.innerText = `quote : ${data.quote}`;
    })
}