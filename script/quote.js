const quoteApi = "https://quotes.rest/qod?language=en";

fetch(quoteApi)
 .then(response => {
     return response.json();
 })
 .then(data =>{
     const quoteApi = data.contents.quotes[0].quote
     const authorApi =data.contents.quotes[0].author
     console.log(quoteApi);
     console.log(authorApi);
     document.getElementById('quote').innerHTML= quoteApi;
     document.getElementById('author').innerHTML= authorApi;
 })