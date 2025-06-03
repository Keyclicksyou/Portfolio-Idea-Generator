import React, { useState } from 'react';

function Buttons(props) {


    const [selectedOption, setSelectedOption] = useState("");





    return (
        <div>
            <div className="toggle-container">
            <label>
            <input type="radio" name="mode" onClick={() => setSelectedOption("Page Component")}/>
            <div className="toggle-label">
                <i className="fa-solid fa-bullseye"></i>
                Page Component
            </div>
            </label>
        
            <label>
            <input type="radio" name="mode" onClick={() => setSelectedOption("Web Page")} />
            <div className="toggle-label">
                <i className="fa-regular fa-star"></i>
                Full Web Page
            </div>
            </label>
            <button onClick={(event) => {
                props.add(selectedOption)
                event.preventDefault();
            }}>Get Challenge!</button>
        </div>
      </div>

    )
}

export default Buttons;