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
    console.log('https://newsapi.org/v2/everything?q=' + cleanSearch + '&apiKey=9b46092d28c54b809c780b840f85657c')
    await fetch('https://newsapi.org/v2/everything?q=' + cleanSearch + '&apiKey=9b46092d28c54b809c780b840f85657c')
    .then(response => {
        return response.json()
    })
    .then(result => {
        const url = result.articles[0].url;
        const articles = result.articles;
        const articleArray = new Array(result.length);
        for(let i = 0; i < articles.length; i++){
            articleArray[i] = {headline: articles.title, 
                publisher: articles.source[1], 
                url: articles.url, 
                description: articles.description,
                imageURL: articles.urlToImage, 
                timePublished: articles.publishedAt, 
                content: articles.content};
        }
        for(const article of articleArray){
            console.log (article.headline);
        }
        console.log(url)
    })
}
function replaceSpaceToDash(inputString)
{
    var cleanedString = inputString.replaceAll(" ", "-")
    return cleanedString
}
class Article{
    constructor(headline,publisher, url, description, imageURL, timePublished, content ){
        this.headline = headline;
        this.publisher = publisher;
        this.url = url;
        this.description =description;
        this.imageURL = imageURL;
        this.timePublished = timePublished;
        this.content = content;
    }
}