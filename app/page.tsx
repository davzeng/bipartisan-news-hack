
'use client'
import Image from 'next/image'
import {Card, CardBody} from "@nextui-org/react";
import Cards from './Cards.tsx';
import CardTest from './CardTest.tsx';
import SearchBar from './searchBar.js';
import DateTabs from './Tabs.tsx';
import SplitCards, { UpdateCards } from './SplitCards.tsx';
import { UpdateTables } from './Tables.tsx';

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
  UpdateCards(articles);
  UpdateTables(articles);
}