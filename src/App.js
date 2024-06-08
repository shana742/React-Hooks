import React from "react";
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import Callback from "./Hooks/Callback";
import Memo from "./Hooks/Memo";
import Header from "./Hooks/Navigate/Header";
import { BrowserRouter , Routes , Route} from 'react-router-dom';
 import Context from "./Hooks/Context";
import Home from "./Hooks/Navigate/Home";
import About from "./Hooks/Navigate/About";
import Contact from "./Hooks/Navigate/Contact";
import Lists from "./Hooks/Lists";


function App() {
  return (
    <div>
        <State/>
        <Ref/>
        <Callback/>
        <Memo/>
        {<Context/> }
        <Header/>
        <Lists/>


        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} /> 
          </Routes>
        </BrowserRouter>
        <Effect/>
    </div>
  )}

export default App;
