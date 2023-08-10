import React from 'react'
import { Link } from "react-router-dom";
const FamilyMovies = ({item}) => {
  return (
    <>
      <div >
      <Link to='/comman'>
   <img src={item.Url} alt='image1' style={{width:'299', height:'168'}} /></Link>
  <h4 style={{color:'white'}}>{item.discription}</h4>
  
   </div>
    </>
  )
}

export default FamilyMovies
