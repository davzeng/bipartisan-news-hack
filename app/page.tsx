'use client'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SplitCards from './SplitCards';
import Tables from './Tables';
function populate(arr:Array<Array<string>>){
  /*
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
  }*/
  if(arr[0] == null)
  {
    arr[0] = new Array<string>(6);
    arr[0][0] = "ISRAEL - HAMAS WAR UPDATES";
    arr[0][1] = "1 day(s) ago:  2023-10-14";
    arr[0][2] = "CNN";
    arr[0][3] = "By Kathleen Magramo";
    arr[0][4] = "https://i.imgur.com/BWHdjUE.jpeg";
    arr[0][5] = "https://www.cnn.com/middleeast/live-news/israel-news-hamas-war-10-14-23/index.html";

    arr[1] = new Array<string>(6);
    arr[1][0] = "Navy SEAL-turned-GOP lawmaker: Special ops hostage...";
    arr[1][1] = "Today:  2023-10-15";
    arr[1][2] = "Fox News";
    arr[1][3] = "By Kyle Morris";
    arr[1][4] = "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/10/1440/810/Ryan-Zinke.jpg?ve=1&tl=1";
    arr[1][5] = "https://www.foxnews.com/politics/navy-seal-turned-gop-lawmaker-special-ops-hostages-rescue-israel-would-take-considerable-effort";
  
    arr[2] = new Array<string>(6);
    arr[2][0] = "Why Israel Must Reconsider Its Gaza Evacuation Order";
    arr[2][1] = "2 day(s) ago:  2023-10-13";
    arr[2][2] = "CNN";
    arr[2][3] = "António Guterres";
    arr[2][4] = "https://static01.nyt.com/images/2023/10/13/multimedia/13guterre-kfbp/13guterre-kfbp-superJumbo.jpg?quality=75&auto=webp";
    arr[2][5] = "https://www.nytimes.com/2023/10/13/opinion/israel-gaza-united-nations.html";

    arr[3] = new Array<string>(6);
    arr[3][0] = "Israeli survivors of Hamas terror attack recount harrowing brutality, heroism";
    arr[3][1] = "1 day(s) ago:  2023-10-14";
    arr[3][2] = "Fox News";
    arr[3][3] = "Ruth Marks Eglash";
    arr[3][4] = "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/10/156/88/Hamas-survivors.jpg?ve=1&tl=1";
    arr[3][5] = "https://www.foxnews.com/world/israeli-survivors-of-hamas-terror-attack-recount-harrowing-brutality-heroism";

    arr[4] = new Array<string>(6);
    arr[4][0] = "";
    arr[4][1] = "";
    arr[4][2] = "";
    arr[4][3] = "";
    arr[4][4] = "";
    arr[4][5] = "";

    arr[5] = new Array<string>(6);
    arr[5][0] = "";
    arr[5][1] = "";
    arr[5][2] = "";
    arr[5][3] = "";
    arr[5][4] = "";
    arr[5][5] = "";
  }
}

export default function Home() {
  const [articles, setArticles] = useState(new Array<Array<string>>(6));
  populate(articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#5A5A5A' }}>
      <h1 style={{  
                color: "white",
                fontSize: "72px",
                textAlign: "center"
            }}>A Bipartisan (not)Hack</h1>
      <SearchBar setArticles={setArticles}/>
      <Tables source={articles}></Tables>
      <span>&nbsp;&nbsp;</span>
      <SplitCards source={articles}></SplitCards>
    </main>
  )
}