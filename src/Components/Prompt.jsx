import React, {useState, useEffect} from "react";
import themes from '../themes';

function Prompt({ setColor }) { // Passing in the setColor function

    const counterComponent = Math.floor(Math.random() * themes.sectionsComponent.length);
    const counterColor = Math.floor(Math.random() * themes.colours.length);
    const counterTheme = Math.floor(Math.random() * themes.themes.length); // Random index finder of different items in themes array

    const component = themes.sectionsComponent[counterComponent];
    const color = themes.colours[counterColor];
    const theme = themes.themes[counterTheme]; // Uses the index to define which item in each object is being used


    useEffect(() => {
        setColor(color);
    }, [setColor]); //Use effect changes the inline style color in the challenge area component



    return ( // renders the randomly generated challenge
        <div className="challenge-text">
            <h1>Create <span style={{color: "white"}}>{component}</span></h1>
            <h1>For <span style={{color: "white"}}>{theme}</span></h1>
            <h1>Using <span style={{color: "white"}}>{color}</span> as the accent color</h1>
        </div>
    )
}

export default Prompt;