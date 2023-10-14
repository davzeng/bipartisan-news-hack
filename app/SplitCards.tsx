'use client'
import React, { useState } from 'react';
import Cards from './Cards';

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
}

export default function SplitCards() {
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
