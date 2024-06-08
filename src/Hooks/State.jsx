import React, { useState} from "react";

// manage stste in functional componet

function State () {
    const [count, setCount] = useState(0);
    return(
            <>
                <h1>Using useState</h1>
                <p> You Clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}> Click Me</button>
            </>
        
    )
}

export default State;