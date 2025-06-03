import React, { useState } from 'react';
import Buttons from './Buttons';
import Prompt from './Prompt';
import Promptb from './Promptb.jsx';
//Importing react and necessary components

function ChallengeArea() {

    const [state, setState] = useState("")
    const [counter, setCounter] = useState(0) //Counter allows me to keep re using the button to get new challenges
    const [color, setColor] = useState("#f87171")



    function getChallenge(option) {
        setState(option);
        setCounter(counter + 1); // Updates counter and state to create unique prompts each time. This also allows same button to be pressed 
      }
    

    return (
        <div className="challenge-banner" style={{ backgroundColor: color }}>
            <Buttons add={getChallenge} />
            {state === "Page Component" && <Prompt setColor={setColor} key={counter}/>}
            {state === "Web Page" && <Promptb setColor={setColor} key={counter}/>}

            <div className="wave" />
            <div className="wave" />
            <div className="wave" /> 
        </div>
    )
}
//Wave CSS from https://codepen.io/baarbaracrr/pen/KKovmGb


export default ChallengeArea;
