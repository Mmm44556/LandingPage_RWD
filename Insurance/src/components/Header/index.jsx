import { useContext } from "react";
import styled from "styled-components"
import Desktop_intro from '@images/image-intro-desktop.jpg';
import { DRight, DLeft, MLeft, MRight } from '@icons/Line';
import { Button } from '@styles';
import { ViewPort } from "../../context";
const StyledHeader = styled.header`
grid-area:header;
display:flex;
justify-content:center;
background-color: hsl(256, 26%, 20%);
width:100%;
height:500px;
padding:10%;
padding-bottom:5%;
padding-top:5%;
position:relative;
margin-bottom:400px;

@media (max-width:992px){
  flex-direction: column-reverse;
  height:auto !important;
  text-align:center;
  margin-bottom:200px;

  &>div{
    margin-left:0px !important;
  }
  .viewBtn{
    margin:auto;
  }
  hr{
    display:none;
  }
    #intro{
      margin:0px;
      margin-bottom:15px;
      img{
        width:100% !important;
      }
    }

    svg{
    &:nth-child(1):is(svg){
    bottom:90% !important;
    height:150px;

  }
    &:nth-child(2):is(svg){
    height:25%;
    top:75% !important;
  }
  }
}

div,picture{
hr{
  background-color: hsl(0, 0%, 98%); 
  border: none;
  height: 1px;
  width: 35%;
  margin-bottom:45px;
  margin-right:100%;
}

  width:100%;
  margin-left:20px;
  
  h1{
    font-size:3rem;
    color:hsl(0, 0%, 98%);

  }
  p{
    line-height:1.3rem;
    color:hsl(0deg 0% 82.82%);
    margin-bottom:40px;

  }
  &[id="intro"]{
      z-index:10;
  }
  img{
  width: 75%;
  height: auto;
  position:static;
  }
}
svg{
  position:absolute;
  &:nth-child(1):is(svg){
    left:0;
    bottom:-50%;
  }
    &:nth-child(2):is(svg){
    width:25%;
    right:0;
    top:0;
  }
}

`


export default function Header() {
  const { viewPortIcons, WhichViewPort } = useContext(ViewPort);

  return (
    <>

      <StyledHeader>

        {
          viewPortIcons.header[WhichViewPort]?.Line || <>
            <DLeft />
            <DRight />
          </>
        }

        <div>
          <hr />
          <h1>
            Humanizing your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that’s right for you. Ensure you
            and your loved ones are protected.
          </p>
          <Button type="button" className="viewBtn">
            VIEW PLANS
          </Button>
        </div>

        <picture id="intro">
          <source
            media="(max-width:992px )" srcSet={''}
          />
          <img src={Desktop_intro} alt="family" />
        </picture>

      </StyledHeader>
    </>
  )
}
