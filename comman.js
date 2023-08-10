import React from 'react'
import ReactPlayer from 'react-player';


import './comman.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Horror from '../pages/Horror';
import Header from './Header';
import Footer from './Footer';

// const useStyles=makeStyles({
//   player:{
//     position:"relative",
//     width:"100%"
//   },
//   controls:{
//     position:"absolute",
//     top:0,
//     left:0,
//     bottam:0,
//     right:0,
//     background:"rgba(0,0,0,0.6)",
//     display:"flex",
//     flexDirection:"column",
//     justifyContent:"space-between",
//     zIndex:1,

//   }



// })

const Comman = () => {
  // const classes=useStyles();
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    
    };
    const image1=[{
      id:1,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW37vpEXJz2_jgTK9dYs85EhceRVGgicRraQpoyZHICNLeH8yWW35zmYoXc4B3ng940aKIq85uu6OZsrlJM6AHLCP5lA0ttvP9o.jpg?r=963",
      discription:"Baby Boss"
    
  },
    {
      id:2,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbb8G7Xr4c4Qfy5HBR4rXK1eswvyJJ2DLo4cIXzmL5nQ0lEh_6nWWCEotsLuinh-cZSq2IziwIi6XBmyXh2uXqs6VGQGmqISQKg.jpg?r=bcb",
      discription:"DoreMon"
    },
    {
      id:3,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfJeoNSJnAw3uW5GHTrr1zkaiPK_RX7OfTTTUMdqoFKusnquA2ZI358m_BW3M0777d3DbsQpdrqoOWaiSs_-z16GP2-npEnNhqs.jpg?r=0ee",
      discription:"Clifford"
    },
    {
      id:4,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRMG6X2e8tGPdaqkNyuYytHRGBb1fv9UzxGO5av37qtDqcRoRxaCdeE1tlpx9ZUDJkGu9Vdzv7CZp5yy_1Gy9qjX4q25AFkY4t4cj1iwGIpKuCZ_HFqL1iyjJX7AxLL_dxSY.jpg?r=df9",
      discription:"chupa"
    },
    {
      id:5,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQVH9DD29P6Wb5uFoLNrxPRp3Z1mXlYM-myPvs3SIDchqqa3tb8_0gZmYoUJvx8NpJVaCOrkroN8Yw8JR25j9BF3U_xemPsRQzo.jpg?r=346",
      discription:"The Angry Birds"
    },
    {
      id:6,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd7yGfxi5Z3Hlv3TMOq4MzZFmtsdviv1FUDWEi-1AJ1bcsnTM56uG8u3OhN62WjEqYXlnaUuIEMkLytDXSnreO-G2PCqzC8pQv54SMLtp26y-zqJjSPxW1jFBXVTGas0lcX7.jpg?r=db4",
      discription:"The Magician Elephant"
    },
    {
      id:7,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbewMbUZoIwnLXqD2VrdRQA7-j7Ce0pSbdY929BON4R3tctYkCFrVIBP10R9Jv34yzcmZ_9l915Mvk6S4WzoAy-liu1xS_2GhJA.jpg?r=a2e",
      discription:"sprit"
    },
    {
      id:8,
      Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUTby3f4_V_MSyBQZr_tvdFaXBtWUOS-fov74gP1Bhq7aKEAJc5A2Y_XwFsqJqffBMlK66Cc1NTmoBLsXuFaGuUYVbLdeDt2jbw.jpg?r=c88",
      discription:"Tom and Jerry"
    },
  ];
  return (
    <>
    <div className='header'>
    <Header />
    </div>
  
        <div className='comman'>
       
        <div className='comman_image'>
       
        {/* <div className={classes.player}> */}
         <ReactPlayer 
         controls
         width='480px'
         height='240px'
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          onReady={()=> console.log("ready")}
          onPause={()=> console.log("pause")}
          playing={false}
          muted={true}
          
         />
         {/* <div className={classes.controls}></div>
         </div> */}
         
        </div>
      <div className="comman_intro" >
        <div className="comman-content">
         
         <div className='comman_watchlist'>
         <img src='Vector (1).png' alt='...'/>
<p>WATCHLIST</p>
         </div>
         <div className='comman_share'>
         <img src='Vector (2).png' alt='...'/>
<p>SHARE</p>
         </div>
         <div className='play' >
         <button > ▶ </button>
         
         
         </div>
         <h1 >Tenet</h1>
          </div>
        </div>
      <div className='comman_details'>
      <div className='imdb'> <p> IMDb 7.3 <span>    2 h 30 min   2020</span></p></div>
<div className='action'>
  <button className='one'>Action</button>
  <button className='two'>science Fiction</button>
  <button className='three'>Suspense</button>
  <button className='four'>Drama</button>
</div>

          <p>Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.</p>
        </div>
        <section>
    <h2 style={{color:'white' }}>More Like This</h2>
    <Slider {...settings}>
    {image1.map((item,id)=>{
        return(
          <>
          
          <Horror item={item} index={id} />
          </>
          
        )
     })}
  </Slider>
  </section>  
      </div>
      <Footer />
    </>
  )
}

export default Comman;
