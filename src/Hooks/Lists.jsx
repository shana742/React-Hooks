import React from "react";

const Lists = () => {
    const fruites = ['Apple', 'Banana', 'Orange', 'Mango']

    return (
        <>
           <h1> Fruit List</h1>
           <ul>
            {fruites.map((fruit, index) =>(
                <li key={index}>{fruit}</li>
            ))}
           </ul>
        </>
    )
}

export default Lists;