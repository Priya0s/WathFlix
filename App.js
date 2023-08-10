import React from 'react'
// import { useEffect } from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Comman from './component/comman';


function App() {
//   const [data, setData]=useState([])
//   const url="https://ott-be-dev.netskill.com/home"
// useEffect (()=>{
// fetch(url)
// .then(response =>response.json()).then(json=>{
// console.log("response",json)
// setData(json)
// }).catch(e=>{
//   console.log("e",e)
// })

// },[])



  return (
    <>
      
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/about" element={<Movies />} />
      <Route path='/comman' element={<Comman />} />
    </Routes>
   
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
