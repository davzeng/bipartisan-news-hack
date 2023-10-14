'use client'
import React, { useState } from 'react';
import Cards from './Cards';

export default function SplitCards() {
    return (
        <div style={{  
            display: "grid",  
            justifyContent: "space-around",
            gridTemplateColumns: "1fr 60px 1fr"  
          }}> 
            <Cards></Cards>
            <div></div>
            <Cards></Cards>

            <Cards></Cards>
            <div></div>
            <Cards></Cards>

            <Cards></Cards>
            <div></div>
            <Cards></Cards>
        </div> 
    );
}
