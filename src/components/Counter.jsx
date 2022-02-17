import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    
    const increments = () => {
        setCounter(number => number + 1);
    }
    
    return (
        <div>
            <h2>{counter}</h2>
            <button
                type="button"
                onClick={increments}
            >
                Increment
            </button>
        </div>
    );
}
