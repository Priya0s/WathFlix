import React,{ useState } from 'react'
import './Carousel.css'
import { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FamilyMovies from '../pages/FamilyMovies';
import SciFi from '../pages/SciFi';
import Horror from '../pages/Horror';

const Carousel = () => {
  const [data, setData]=useState([])
  const url="https://ott-be-dev.netskill.com/home"
useEffect (()=>{
fetch(url)
.then(response =>response.json()).then(json=>{
console.log("response",json)
setData(json)
}).catch(e=>{
  console.log("e",e)
})

},[])



    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" ,position:"absolute"}}
            onClick={onClick}
          />
        );
      }
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" ,position:"absolute" }}
            onClick={onClick}
          />
        );
      }
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows:true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
      
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
      const image2=[{
        id:1,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefgo91yoiv7dLvV_WrLL4H_hGoApaZ9w6Xyd2y7jJb9EjxK8GATuo-O7jiROH9aViqQYZ_FE_MjaaXtWQyEVkv6KbfMsqtdKqxkjxWNwzvmcsdbaUX7gp5WqM7aeq5oRVo2.jpg?r=d13",
        discription:"The Mother"
      },
      {
        id:2,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR254OJQlhdY0jrHFpNNBJT48DZdEDPhVqAQfDdUKEktk86_lygft2r6zOxE1aUd1dlub76lcK8gA2r32ghHvLwVb_Mmc4xCJXm_2gyIJk7XzCni5Il9P9Q80yXEn-g-FVqW.jpg?r=87c",
        discription:"Troll"
      },
      {
        id:3,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRFhZ5DEMlsNrloisG4lNMuiS6-u8eMaOtDLmb7V6_uf94qAF71k46iaX44TBn_SHMiY-kXxMEhBwrHdh2m1TE6qhxHSt5m7CFw.jpg?r=fbd",
        discription:"Kantara"
      },
      {
        id:4,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZO5-npqWJkJQJGPYbJ3jpwigThaAIOwWo1CpcOA1wpRkNDaS3xfkkiEJ1ySkz5JEJUsgvcgAjspOBn1LH_j5OvNtbW4-mF9WWo.jpg?r=b02",
        discription:"The Last Airbender"
      },
      {
        id:5,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUQy1Imjj9G7L0VuUcz_nYDMlm6gqNZ4-6Ukolm2_IFph0YY3hlz95Mhfl3nKRv9FtLEi0_tpw8ZtGJ5UMN9b9muIHrk1zYI6CdLSGWUm2pOCwAkTByXuje-XzRxp7Gwx6kc.jpg?r=a7a",
        discription:"Red Notice"
      },
      {
        id:6,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZNHofgCIyi4urFgpG-7gGWNrM9_GaAOnAYISWnQMZZsKN_ow3Mu_9n32J5rKsMM_ObkRjqgTcLQ0nQxtPeFuu933jF5HfxeZxo.jpg?r=83c",
        discription:"Bullet Train"
      },
      {
        id:7,
        Url:"https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLg6Gd7WyXfi_3JHa2rf3sLdM7Vx363B2Is5DfZDqybok3pkZ1JZPBCCHLm8RigIsAG0ZSVMdmtaqThPYLHffsMqI-nd9wRXhY.jpg?r=c9b",
        discription:"Wrath Man"
      },
      
      ];
      
  return (
    <>
   <div className='main'>
    <div className='para'>
      <h1>Movies</h1>
      <p className='paragraph'>Movies move us like nothing else can, whether they’re scary, funny, <br/>dramatic, romantic or anywhere in-between. So many titles, so much<br/> to experience.</p>
    </div>

    <section>
    <h2 style={{color:'white',
    fontfamily:'Poppins',
fontsize: "24",
fontweight: "600",
lineheight: "36",
letterspacing:'0 em',
textalign: 'left',
}}>Trending Now</h2>
   
    <Slider {...settings}>
    {image1.map((item,id)=>{
        return(
          <>
          
          <FamilyMovies item={item} index={id} />
          </>
          
        )
     })}
  </Slider>
 
  </section>
  <section>
    <h2 style={{color:'white',
    fontfamily:'Poppins',
fontsize: "24",
fontweight: "600",
lineheight: "36",
letterspacing:'0 em',
textalign: 'left',}}>Sci-Fi</h2>
    <Slider {...settings}>
    {image2.map((item,id)=>{
        return(
          <>
          
          <SciFi item={item} index={id} />
          </>
          
        )
     })}
  </Slider>
  </section>     
  <section>
    <h2 style={{color:'white', fontfamily:'Poppins',
fontsize: "24",
fontweight: "600",
lineheight: "36",
letterspacing:'0 em',
textalign: 'left',}}>Horror</h2>
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
    </>
  )
}

export default Carousel
