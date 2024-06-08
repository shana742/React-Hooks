import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // A costly computation function
  const expensiveComputation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Use useMemo to memoize the result of the expensive computation
  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
        <p>Computed Value: {computedValue}</p>
      </div>
      <div>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type something" 
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

export default Memo;
