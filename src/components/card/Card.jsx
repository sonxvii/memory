import { useState } from "react";
import './Card/card.css'

export function Grid({key,path}) {
    const [Card] = require();
    
    // const handleClick = () => {
    //     setCheckCard(!checkCard);
    // }
    // let className = `card ${checkCard ? 'card-check' : ''}`;
    return(
        <div 
            className={className} 
            onClick={handleClick} 
            data-back={back}
        >
            {front}
        </div>
    );
}