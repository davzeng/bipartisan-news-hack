'use client'
import React from 'react';
import Cards from './Cards';
import { Style } from 'util';

//var link = "https://i.imgur.com/BWHdjUE.jpeg"

export default function SplitCards({source}:{source:Array<Array<string>>}) {

    
    return (
        <div style={{  
            display: "grid",  
            justifyContent: "space-below",
            rowGap: "20px",
            gridTemplateColumns: "1fr 60px 1fr"  
          }}> 
            <h1 style={{  
                color: "blue",
                fontSize: "50px",
                textAlign: "center"
            }}>Left</h1>
            <div></div>
            <h1 style={{  
                color: "red",
                fontSize: "50px",
                textAlign: "center"
             }}>Right</h1>

            <Cards source={source[0]}></Cards>
            <div></div>
            <Cards source={source[1]}></Cards>

            <Cards source={source[2]}></Cards>
            <div></div>
            <Cards source={source[3]}></Cards>

            <Cards source={source[4]}></Cards>
            <div></div>
            <Cards source={source[5]}></Cards>
        </div> 
    );
}
