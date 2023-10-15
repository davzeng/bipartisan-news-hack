'use client'
import Image from 'next/image'
import {Card, CardBody} from "@nextui-org/react";
import Cards from './Cards.tsx';
import CardTest from './CardTest.tsx';
import SearchBar from './searchBar.js';
import DateTabs from './Tabs.tsx';
import SplitCards, { UpdateCards } from './SplitCards.tsx';
import { UpdateTables } from './Tables.tsx';
import { useState } from 'react';

//title, time, site, author, image-link, page-link
/*
var articles = [["Irael-Hamas-War Rages On", "10 minutes ago", "CNN", ""],
  ["Israel Evacuation Order", "11 hours ago", "BBC"],
  ["Israel Prepares Ground Assault", "17 hours ago", "Reuters"],
  ["Why Israel Must Reconsider...", "23 hours ago", "NYT"]];
*/
var articles = [
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"],
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"],
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"],
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"],
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"],
  ["ISRAEL - HAMAS WAR UPDATES", "10 minutes ago", "CNN", "By Kathleen Magramo", "https://i.imgur.com/BWHdjUE.jpeg", "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html"]];

UpdateAll();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#5A5A5A' }}>
      <SearchBar/>
      <DateTabs></DateTabs>
      <SplitCards></SplitCards>
    </main>
  )

}

function UpdateAll(){
//  console.log(articles);
  UpdateCards(articles);
  UpdateTables(articles);
}


export function SearchUpdate(cnn:Array<Array<string>>, fox:Array<Array<string>>){
  const currentDate = new Date();
  //orders everything
  for(var i = 1; i < 3; i++){
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
    //clean times
    for(var i = 0; i < 3; i++){
      cnn[i][1] = Clean(cnn[i][1]);
      fox[i][1] = Clean(fox[i][1]);
      
      articles[i*2] = cnn[i];
      articles[i*2 + 1] = fox[i];
    }

  }

  UpdateAll();
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
  const currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDay();
  if(!(year.toString() === split[0])){
    return "" + (parseInt(split[0])-year) + " years ago. " + time.substring(0,10);
  }
  if(!(month.toString() === split[1])){
    return "" + (parseInt(split[1])-month) + " months ago. " + time.substring(0,10);
  }
  if(!(day.toString() === split[2].substring(0,2))){
    return "" + (parseInt(split[2].substring(0,2))-day) + " days ago. " + time.substring(0,10);
  }
  return "Today"
}