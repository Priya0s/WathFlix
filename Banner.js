import React from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';


const Banner = ({item}) => {
  
    return (
        <div className='Banner'>
        <div className='banner_image'></div>
      <div className="banner_intro" >
      {
          item.map((index,id)=>{
            return(
        <div className="banner-content">
        <h1>{index.data}</h1>
            <p >{index.discription}</p>
            <Link to="/comman">
          <button className='button'>
         <p>▶ Watch now</p>
         </button> </Link>
         <div className='star'>
          <p className='star5'><img src='Star 5.png' alt='..'/></p>
          <p className='p1'><img  src='Star 4.png' alt='..'/></p>
          <p className='p2'><img  src='Star 4.png' alt='..'/></p>
          <p className='p3'><img  src='Star 4.png' alt='..'/></p>
          <p className='p4'><img  src='Star 4.png' alt='..'/></p>
          
         </div>
         
         <div className='watchlist'>
         <img src='Vector (1).png' alt='...'/>
<p>WATCHLIST</p>
         </div>
         <div className='share'>
         <img src='Vector (2).png' alt='...'/>
<p>SHARE</p>
         </div>
         
       
          

        </div>
          )}
          )}
      </div>
     
      </div>
    );
  };
  
  export default Banner;