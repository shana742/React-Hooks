import React, { useState, useCallback } from "react";
// use callback  is a hook that allows you to memorize a callback function.


const ItemList = React.memo(({items, onAdditem}) => {
    console.log('itemlist rendered');
    return(
        <div>
            <ul>
                {
                    items.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <button onClick={onAdditem}>Add Item</button>
        </div>
    )
}) 
function Callback() {
    const [items, setItems] = useState(['Item 1', 'Item 2'])

    const handleAdditem = useCallback(() => {
        setItems(prevItems => [...prevItems, `Item ${prevItems.length +1}`]);
    }, [ setItems]);
    return (
        <>
            <h1>  useCallback</h1>
           <h1> items</h1>
           <ItemList items={items} onAdditem={handleAdditem} />
        </>
    )
}


export default Callback;