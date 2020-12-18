import React from 'react';
import Header from "../Header";
import homeItems from "./info";
import HomeCard from "./HomeCard";

export default function Home() {
    return (
        <div className="home">
        <div className="main">
        <Header>Popular Movies and Series</Header>
        <div className="home-content"> 
           { homeItems.map(item => {
               const { type, path } = item;
               return(
               <HomeCard 
               type = {type}
               path= {path} 
               />
               )
           })}  
        </div>
        </div>
        </div>
    )
}
