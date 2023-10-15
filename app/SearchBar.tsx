'use client'
import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true 
});

export default function SearchBar({setArticles}:{setArticles:Function}) {
    const [query, setQuery] = useState("");
    const [context, setContext]=useState("AI generated context may take a minute or so to appear after a search.");
    return (
        <div>
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
            <h1>AI Generated Context my be inaccurate. Consider reading deeper into the topics you find here.</h1>
            <br></br>
            <textarea rows={30} cols={100} style={{maxHeight:"200px", minHeight:"200px", resize:"none"}} readOnly = {true} value = {context}></textarea>
            <br></br>
        </div>
    );
    
    function change(e:any){
        e.preventDefault()
        setQuery(e.target.value)
    }   
    async function search(){
        apiProcess(query,setArticles)
    } 

    async function apiProcess(search: string, setArticles:Function)
    {
        var cleanSearch = replaceSpaceToDash(search);
        const cnn = await makeSearch(cleanSearch, "cnn.com");
        const fox = await makeSearch(cleanSearch, 'foxnews.com');
        var list = null

        if(cnn != null && fox != null)
        {
            list = compileArticles(cnn, fox);
            console.log(cnn);
            console.log(fox);
            console.log(list);
            setArticles(list);

            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: generatePrompt(cleanSearch) }],
                model: "gpt-3.5-turbo",
            });
            console.log(completion);
            var content = completion.choices[0].message.content;
            if(content){
                setContext(content);
            }
        }
        else{
            console.log('No data retrieved from CNN or Fox');
        }
    }

    async function makeSearch(cleanSearch: string, publisher: string){
        var link  = 'https://newsapi.org/v2/everything?q=' + cleanSearch + '&domains='+publisher+'&apiKey=5a62864d4dea4cc7806ea2023ee13c53';
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
                for(let i = 0; i < articles.length && i < 9; i++){
                    newspages[i] = [articles[i].title, articles[i].publishedAt, articles[i].source.name, articles[i].author, articles[i].urlToImage, articles[i].url];
                }
    
        
                console.log(articles[0].url);
                return newspages;
                // Process and use data from 
              } else {
                console.log("No articles or missing 'url' property in the response");
              }
        })
    }

    function replaceSpaceToDash(inputString: string)
    {
        var cleanedString = inputString.replaceAll(" ", "-")
        return cleanedString
    }

    function compileArticles(cnn:Array<Array<any>>, fox:Array<Array<any>>){
        var length = Math.min(cnn.length, fox.length);
        var list = new Array<Array<string>>(length*2);
        for(var i = 0; i < 6; i++){
            list[i] = new Array<string>(6);
        }
        const currentDate = new Date();
        //orders everything
        for(var i = 1; i < length; i++){
          for(var j=i; j>0; j--){
            if(Compare(cnn[j][1], cnn[j-1][1])){
              var temp = cnn[j-1][1];
              cnn[j-1][1] = cnn[j][1];
              cnn[j][1] = temp;
            }
          }
          for(var j=i; j>0; j--){
            if(Compare(fox[j][1], fox[j-1][1])){
              var temp = fox[j-1][1];
              fox[j-1][1] = fox[j][1];
              fox[j][1] = temp;
            }
          }
        }
        //clean times;
        for(var i = 0; i < length; i++){
            cnn[i][1] = Clean(cnn[i][1]);
            fox[i][1] = Clean(fox[i][1]);
            
            list[i*2] = cnn[i];
            list[i*2 + 1] = fox[i];
        }
      
        return list;
    }

    
    function Compare(one:string, two:string){//returns is bigger
        var oneSplit = one.split("-");
        var twoSplit = two.split("-");
        if(oneSplit[0].localeCompare(twoSplit[0]) == 1){
            return true;
        }
        else if(oneSplit[0].localeCompare(twoSplit[0]) == -1){
            return false;
        }

        if(oneSplit[1].localeCompare(twoSplit[1]) == 1){
            return true;
        }
        else if(oneSplit[1].localeCompare(twoSplit[1]) == -1){
            return false;
        }

        if(oneSplit[2].localeCompare(twoSplit[2]) == 1){
            return true;
        }
        return false;
    }

    function Clean(time:String){
        var split = time.split("-");
        const currentDate = new Date(2023, 10, 15, 10, 10, 10, 0);
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth();
        var day = currentDate.getDate();
        if(!(year.toString() === split[0])){
          return "" + (year-parseInt(split[0])) + " year(s) ago:  " + time.substring(0,10);
        }
        if(!(month.toString() === split[1])){
          return "" + (month-parseInt(split[1])) + " month(s) ago:  " + time.substring(0,10);
        }
        if(!(day.toString() === split[2].substring(0,2))){
          return "" + (day-parseInt(split[2].substring(0,2))) + " day(s) ago:  " + time.substring(0,10);
        }
        return "Today:  " + time.substring(0,10);
      }
}

function generatePrompt(search: string) {
    console.log("this was ran");
    return `Write a summary of the discourse surrounding ${search} over the years`;
}