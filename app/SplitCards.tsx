'use client'
import React from 'react';
import Cards from './Cards';

//var link = "https://i.imgur.com/BWHdjUE.jpeg"

export default function SplitCards({source}:{source:Array<Array<string>>}) {

    var cardList = [];
    for(var i = 0; i < source.length/2; i++){
        cardList.push({id: 3*i, card: <Cards source={source[i*2]}></Cards>});
        cardList.push({id: 3*i+1, card: <div></div>});
        cardList.push({id: 3*i+2, card: <Cards source={source[i*2+1]}></Cards>});
    }
    
    return (
        <div style={{  
            display: "grid",  
            justifyContent: "space-below",
            rowGap: "20px",
            gridTemplateColumns: "1fr 50px 1fr"  
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

            {cardList.map(item => (
                <div key={item.id}>{item.card}</div>
            ))}
        </div> 
    );
}
