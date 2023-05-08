import React from "react";
import Card from "./Card";
import data from './Data';

function ncard(val){
    return(
    <Card
    key={val.key}
    poster={val.poster}
    channel={val.channel}
    topic={val.topic}
    totalTime={val.totalTime}
    link={val.link}
    />);
   }
   const App = () => {
        return(
            <>
                <h1 id='heading'>Top Playlists for WebDelopment</h1>
                <div id="container">
                {data.map(ncard)}
                </div>
            </>
        );
   }
 
   export default App;