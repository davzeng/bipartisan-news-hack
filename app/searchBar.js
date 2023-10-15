'use client'
import React, { useState } from 'react';
import { SearchUpdate } from './page';

const SearchBar = () => {

    const [query, setQuery] = useState("");

    function change(e){
        e.preventDefault()
        setQuery(e.target.value)
    }   
    async function search(){
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
    const cnn = await makeSearch(cleanSearch, "cnn.com");
    const fox = await makeSearch(cleanSearch, 'foxnews.com');
    if (cnn) {
        for (const element of cnn) {
            console.log(element[0]);
        }
    } else {
        console.log('No data retrieved from CNN');
    }
    SearchUpdate(cnn,fox);
   // console.log(arr.length)
    //makeSearch(cleanSearch, 'techcrunch.com');
}
async function makeSearch(cleanSearch, publisher){
    var link  = 'https://newsapi.org/v2/everything?q=' + cleanSearch + '&domains='+publisher+'&apiKey=d43ea76edd2942beb8cb31003c9306f5';
    return fetch(link)
    .then(response => {
        return response.json()
    })
    .then(result => {
       // const url = result.articles[0].url;

       const articles = result.articles;
        if (articles && articles.length > 0 && articles[0].url) {
            //title, time, site, author, image-link, page-link    
            var newspages = [];
            for(let i = 0; i < articles.length && i < 3; i++){
                newspages[i] = [articles[i].title, cleanTime(articles[i].publishedAt), articles[i].source.name, articles[i].author, articles[i].urlToImage, articles[i].url];
            }

    
            console.log(articles[0].url);
            return newspages;
            // Process and use data from 
          } else {
            console.log("No articles or missing 'url' property in the response");
          }
        //
    })
}
function cleanTime(time){
    return time;
}
function replaceSpaceToDash(inputString)
{
    var cleanedString = inputString.replaceAll(" ", "-")
    return cleanedString
}