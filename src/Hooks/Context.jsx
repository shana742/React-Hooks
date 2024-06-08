import React, { createContext,useState, useContext } from 'react';
import ReactDom from 'react-dom';

const  ThemeContext = createContext();

const Context = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) =>(prevTheme ==='light' ? 'dark' : 'light'));
  }
     return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemedComponet/>
        </ThemeContext.Provider>         

     )
}

const ThemedComponet =() => {
     const { theme, toggleTheme} = useContext(ThemeContext);

     return(
        <div style={{
             background: theme === 'light' ? 'fff' : '#333',
             color: theme === 'light' ? '000' : '#fff',
             padding: '20px',
             textAlign: 'center'
        }}>
 
           <h1>{theme.charAt(0).toUpperCase + theme.slice(1)} Theme</h1>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    
     )
}

export default Context;
