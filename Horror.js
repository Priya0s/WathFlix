import React from 'react'

import { Link } from "react-router-dom";
const Horror = ({item}) => {
  return (
    <>
     <div>
     <Link to="/comman">
     <img src={item.Url} alt='image1' /></Link>
  <h4 style={{color:'white'}}>{item.discription}</h4>
     </div> 
    </>
  )
}

export default Horror
