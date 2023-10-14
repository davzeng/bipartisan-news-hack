'use client'
import React, { useState } from 'react';

const SearchBar = () => {

    const [query, setQuery] = useState("")

    function change(e){
        e.preventDefault()
        setQuery(e.target.value)
    }   
    function search(){
        apiProcess(query)
    } 
    return (
      <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
          <input
              type="text"
              className="w-full placeholder-gray-400 text-gray-900 p-4"
              placeholder="Search"
              onChange={change}
              value={query}
          />
          <button 
            className="bg-white p-4"
            onClick={search}>🔍
          </button>
      </div>
  );
};
export default SearchBar;
function removePunctuationAndSeparateWords(inputString) {
    // Use a regular expression to match and remove punctuation
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"'<>\[\]\?]/g, '');

    // Replace multiple spaces with a single space
    const finalString = cleanedString.replace(/\s+/g, ' ');

    return finalString;
}
async function apiProcess(search)
{
    console.log(search)
    var cleanSearch = replaceSpaceToDash(search)
    var CNN = makeSearch(cleanSearch, "bbc.co.uk");
    var Fox = makeSearch(cleanSearch, 'foxnews.com');
    var techcrunch = makeSearch(cleanSearch, 'techcrunch.com');
    
    console.log(CNN)
    await fetch(CNN)
    .then(response => {
        return response.json()
    })
    .then(result => {
       // const url = result.articles[0].url;

       const articles = result.articles;
        if (articles && articles.length > 0 && articles[0].url) {
            console.log(articles[0].url)
            // Process and use data from Fox News
          } else {
            console.log("No articles or missing 'url' property in the response");
          }
        //
    })
    // console.log(Fox)
    // await fetch(Fox)
    // .then(response => {
    //     return response.json()
    // })
    // .then(result => {
    //     const url = result.articles[0].url;
    //     const articles = result.articles;
    //     console.log(url)
    //     //
    // })
    // console.log(techcrunch)
    // await fetch(techcrunch)
    // .then(response => {
    //     return response.json()
    // })
    // .then(result => {
    //     const url = result.articles[0].url;
    //     const articles = result.articles;
    //     console.log(url)
    //     //
    // })
}
function makeSearch(cleanSearch, publisher){
    var link  = 'https://newsapi.org/v2/everything?q=' + cleanSearch + '&domains='+publisher+'&apiKey=9b46092d28c54b809c780b840f85657c';
    return link;
}
function replaceSpaceToDash(inputString)
{
    var cleanedString = inputString.replaceAll(" ", "-")
    return cleanedString
}
// class Article{
//     constructor(headline,publisher, url, description, imageURL, timePublished, content ){
//         this.headline = headline;
//         this.publisher = publisher;
//         this.url = url;
//         this.description =description;
//         this.imageURL = imageURL;
//         this.timePublished = timePublished;
//         this.content = content;
//     }
// }