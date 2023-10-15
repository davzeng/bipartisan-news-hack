'use client'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SplitCards from './SplitCards';
import Tables from './Tables';
function populate(arr:Array<Array<string>>){
  for(var i = 0; i < 6; i++){
    if(arr[i] == null)
    {
      arr[i] = new Array<string>(6);
      arr[i][0] = "ISRAEL - HAMAS WAR UPDATES";
      arr[i][1] = "10 minutes ago";
      arr[i][2] = "CNN";
      arr[i][3] = "By Kathleen Magramo";
      arr[i][4] = "https://i.imgur.com/BWHdjUE.jpeg";
      arr[i][5] = "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html";
    }
  }
}

export default function Home() {
  const [articles, setArticles] = useState(new Array<Array<string>>(6));
  populate(articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#5A5A5A' }}>
      <SearchBar setArticles={setArticles}/>
      <Tables source={articles}></Tables>
      <span>&nbsp;&nbsp;</span>
      <SplitCards source={articles}></SplitCards>
    </main>
  )
}