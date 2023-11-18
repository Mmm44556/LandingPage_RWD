import { Fragment, useEffect, useContext } from 'react';
import { Button } from '@styles';
import { MService, DService } from '@icons/Line';
import styled from 'styled-components';
import { services } from './contents';
import { ViewPort } from '../../context';
import { useState } from 'react';
const DetailButton = styled(Button)`
padding:0px 35px;
margin:auto;
height:45px;
`
const StyledMain = styled.main`
grid-area:main;
display:grid;
margin:0px 50px;

  @media (max-width:992px){
    margin:0px;

  }
.services{
  display:flex;

  figure{

      figcaption {
      line-height:23px;
      color: hsl(273, 4%, 51%);
      font-family:karla-400;
    }
  }
  

  @media (max-width:992px){
    display:block;
    text-align:center;
    margin:0px;
  }

}

.title{
  @media (max-width:992px){
    white-space:nowrap;
    font-size:1.6rem;
    margin-left:0px;
    text-align:center;
    hr{
      width:50% !important;
      margin:auto !important;
    }
  }
  hr{
    width:10%;
    margin-right:100%;
    color:hsl(273, 4%, 51%);
  }
  font-size:2rem;
  margin-top:auto;
  margin-left:50px;
}

.details{
    @media (max-width:992px){
      margin:0px 20px;
      display:block;
      text-align:center
    }
  display:flex;
  height:75%;
  align-items:center;
  justify-content:space-around;
  color:hsl(0, 0%, 98%);
  position:relative;
  background-color:hsl(256, 26%, 20%);
  h2{
    font-size:3rem;
  }
  svg{
    position:absolute;
    right:0;
    height:100%;
  }
}

`

export default function Main() {
  const { viewPortIcons, WhichViewPort } = useContext(ViewPort);


  return (
    <>
      <StyledMain>
        <div className='title'>
          <hr />

          <h2>
            We’re different
          </h2>

        </div>
        <div className='services'>
          {
            services.map((e) => {

              return (
                <Fragment key={e.title}>
                  <figure>
                    <div>
                      {e.icon}
                    </div>
                    <h2>
                      {e.title}
                    </h2>
                    <figcaption>
                      {e.description}
                    </figcaption>
                  </figure>
                </Fragment>
              )
            })
          }
        </div>
        <div className='details'>
          {
            viewPortIcons.main[WhichViewPort]?.Line || <DService/>
          }
          <div>
            <h2>
              Find out more<br />
              about how we work
            </h2>
          </div>

          <div>
            <DetailButton>
              How we work
            </DetailButton>
          </div>
        </div>

      </StyledMain>
    </>
  )
}
