import React, {useState, useEffect} from "react";
import themes from '../themes';


function Promptb({ setColor }) {

    const counterComponentA = Math.floor(Math.random() * themes.sectionsComponent.length);
    const counterComponentB = Math.floor(Math.random() * themes.sectionsComponent.length);
    const counterComponentC = Math.floor(Math.random() * themes.sectionsComponent.length);
    const counterColor = Math.floor(Math.random() * themes.colours.length);
    const counterTheme = Math.floor(Math.random() * themes.themes.length); // declaring index of all items from themes

    const compA = themes.sectionsComponent[counterComponentA];
    const compB = themes.sectionsComponent[counterComponentB];
    const compC = themes.sectionsComponent[counterComponentC]; // rendering multiple components for full web page
    const color = themes.colours[counterColor];
    const theme = themes.themes[counterTheme]; // Uses the index to get a random item from each object.


    useEffect(() => {
        setColor(color);
    }, [setColor]);


    return ( // renders the randomly generated challenge
        <div className="challenge-text">
            <h1>Create <span style={{color: "white"}}>A Web Page</span> </h1>
            <h1>For <span style={{color: "white"}}>{theme}</span></h1>
            <h1>With a <span style={{color: "white"}}>{compA}, {compB} and {compC}</span></h1>
            <h1>Using <span style={{color: "white"}}>{color} as the accent color</span></h1> 
        </div>
    )
}

export default Promptb;