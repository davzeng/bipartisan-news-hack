'use client'
import React, { useReducer, useState, useSyncExternalStore } from 'react';
import Cards from './Cards';
import { useForceUpdate } from 'framer-motion';

let cardListeners: (() => void)[] = [];
function useCardData() {
  function subscribe(onStoreChange: () => void) {
    console.log('subscribe called')
    function unsub() {
        cardListeners = cardListeners.filter(el => el !== onStoreChange);
    }

    cardListeners.push(onStoreChange);

    return unsub;
  }

  function getSnapshot() {
    return articles;
  }

  return useSyncExternalStore(subscribe, getSnapshot);
}

var link = "https://i.imgur.com/BWHdjUE.jpeg"

var articles = new Array<Array<string>>(6);
for(var i = 0; i < 6; i++){
    articles[i] = new Array<string>(4);
}

export function UpdateCards(value:Array<Array<string>>){
    for(var i = 0; i < 4; i++){
        articles[i][0] = value[i][0];
        articles[i][1] = value[i][3];
        articles[i][2] = value[i][4];
        articles[i][3] = value[i][5];
    }
    const newArticles = new Array<Array<string>>(6);
    for(var i = 0; i < 6; i++){
        newArticles[i] = articles[i];
    }
    articles = newArticles  as any;
    cardListeners.forEach(listener => listener())
}

export default function SplitCards() {
    const articles = useCardData();

    return (
        <div style={{  
            display: "grid",  
            justifyContent: "space-below",
            rowGap: "10px",
            gridTemplateColumns: "1fr 60px 1fr"  
          }}> 
            <Cards source={articles[0][2]}></Cards>
            <div></div>
            <Cards source={articles[1][2]}></Cards>

            <Cards source={articles[2][2]}></Cards>
            <div></div>
            <Cards source={articles[3][2]}></Cards>

        </div> 
    );
}
