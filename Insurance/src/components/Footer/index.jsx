import React,{useContext} from 'react';
import styled from 'styled-components';
import { footerList } from './contents';
import { Facebook, Instagram, Pinterest, Twitter } from '@icons/Social';
import { ViewPort } from '../../context';
import {DFooter,MFooter} from '@icons/Line';
const StyledFooter = styled.footer`
grid-area:footer;


`
export default function Footer() {
  const { viewPortIcons, WhichViewPort } = useContext(ViewPort);
  return (
    <>
      <StyledFooter>
        <DFooter/>
        {
          viewPortIcons.footer[WhichViewPort]?.Line || <DFooter />
        }
        <div>
          <h5>
            INSURE
          </h5>
          <ul>
          {
              [<Facebook/>, <Instagram/>, <Pinterest/>, <Twitter/>].map((i,idx) =><li key={idx}>{i}</li>)
          }
          </ul>
        </div>
        {

        }
        <div>
         {
            footerList.map((item,index)=>{
              return(
                <div key={index}>
                  <h6>{item.name}</h6>
                  <ul>
                    {
                      item.link.map(i=><li>{i}</li>)
                    }
                  </ul>
                </div>

              )
            })
         }
        </div>

      </StyledFooter>
    </>
  )
}
