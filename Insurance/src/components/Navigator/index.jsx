import { Fragment, useState, useEffect,useContext } from "react";
import styled, { keyframes } from "styled-components";
import { MCloss, MHamburger } from '@icons/Nav';
import { ViewPort } from "../../context";
const fade = keyframes`
from{
opacity:0 ;
}
to{
opacity:1 ;
}
`

const slideDown =
  `
  -webkit-animation: slideDown 1s ease;
  animation: slideDown .5s ease;

@keyframes slideDown {
  0% {
opacity:0;
  }
  100% {
opacity:1;
  }
}
`
const BaseIcon = styled.span`
display:inline-block;
cursor:pointer;
`
const FadeIn = styled(BaseIcon)`
animation:${(({ second }) => second)}s ${fade} ease  both ;
`
const FadeIn2 = styled(BaseIcon)`
animation:${(({ second }) => second)}s ${fade} ease both ;
`



const StyledNavigator = styled.nav`
grid-area:nav;
font-size:15px;
font-family:Karla-400;
display:flex;
justify-content:space-around;
align-items:center;
background: hsl(0, 0%, 98%);
position:sticky;
top:-5px;
z-index:1000;

.dropdown-icon{
  display:none;
}

.logo{
  font-size:2rem;
  font-weight:1000;
  margin:0px 10px;
  margin-bottom:15px;
  padding:10px 10px;
  
  }

  @media(max-width:992px){
  .logo{
    margin-right:auto !important;
  }
  .dropdown-icon{
    position:absolute;
    display:initial;
    right:5%;
  }

}

.nav{
  display:flex;

    @media (max-width:992px){
      position:absolute;
      margin-top:50px;
      left:0px;
      ${slideDown}
      ul{
        display:grid;
        background-color: hsl(270, 9%, 17%);
        position:absolute;
        width:100vw;
        padding:0px !important;
        margin:0px;
        


        li{
          width:inherit !important;
          &[id="menu"]>a{
            border:2px solid hsl(273, 4%, 51%);
            padding:10px 30px;
          }
          &[id="menu"]{
            margin-bottom:10px;
          }
          &:active{
            #submenu{
            opacity: 1 !important;
            visibility: visible !important;
            }
          }
        }

        #submenu{
          background-color:hsl(270, 9%, 17%);
        }

        & li:hover{
          a{
            color : hsl(0, 0%, 98%) !important;
          }
        }

      }

    }

  ul{
  font-family:Karla-700;
  padding:0 10px;
  min-height:50px;
  text-align:center;

    li:last-child:hover{
      background: hsl(256, 26%, 20%);
      border:none;
      font-weight:600;
      transition: all .25s ease;
        a{
          color: hsl(0, 0%, 98%)!important;
          }
        ul{
            background: inherit;
            opacity: 1 !important;
            visibility: visible !important;
            }
        }
    
  li{
  
  float: left;
	position: relative;
	width:10rem;
  white-space:nowrap;
  list-style-type: none;
  padding:15px 40px;
    a{
    text-decoration:none;
    color:  hsl(273, 4%, 51%);
    }

  &:last-child:is(:has(ul)){
    font-weight:600;
    transition: all .25s ease;
    
      &:hover{
        ul{
          background: inherit;
          opacity: 1 !important;
          visibility: visible !important;
        }
        background: hsl(270, 9%, 17%) !important;
        cursor:pointer;
        a{
        color: hsl(0, 0%, 98%) !important;
        }
      }      
    }
    #submenu{
      visibility: hidden;
      opacity: 0;
      z-index: 1;
      left: 0px;
      padding:0px;
      top: 100%;
      position: absolute;
      white-space:nowrap;
      text-align:center;
      li:hover{
        background: hsl(273, 4%, 51%);
        transition: all .25s ease  ;
      }
      &>*{
        width:100%;
      }
    }

  }
  
}

}
`
//視窗監控
const ViewportWidthListener = ({ setDropdown }) => {
  const { setWhichViewPort } = useContext(ViewPort);
  const [hasExecutedSmallScreenLogic, setHasExecutedSmallScreenLogic] = useState(false);
  const [hasExecutedLargeScreenLogic, setHasExecutedLargeScreenLogic] = useState(false);

  useEffect(() => {
    const newViewportWidth = window.innerWidth;
    if (newViewportWidth < 992 && !hasExecutedSmallScreenLogic) {
      setDropdown(true);
    }
  }, [])
  useEffect(() => {
    const handleResize = () => {
      const newViewportWidth = window.innerWidth;

      // 在小于某个宽度的情况下执行一次逻辑
      if (newViewportWidth < 992 && !hasExecutedSmallScreenLogic) {
        setWhichViewPort('mobile');
        // 执行你的小屏逻辑
        setDropdown(true);
        // console.log('@')
        setHasExecutedSmallScreenLogic(true);
        setHasExecutedLargeScreenLogic(false); // 重置大屏逻辑的标志位
        return
      }

      // 在大于某个宽度的情况下执行一次逻辑
      if (newViewportWidth >= 991 && !hasExecutedLargeScreenLogic) {
        setWhichViewPort('desktop');
        // 执行你的大屏逻辑
        setDropdown(false);
        setHasExecutedLargeScreenLogic(true);
        setHasExecutedSmallScreenLogic(false); // 重置小屏逻辑的标志位
        return
      }
    };

    // 添加事件监听器
    window.addEventListener('resize', handleResize);

    // 在组件卸载时移除事件监听器，以防内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [hasExecutedSmallScreenLogic, hasExecutedLargeScreenLogic]);

  return <></>
}

export default function Navigator() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandel = () => setDropdown(!dropdown);

  return (
    <>
      <StyledNavigator>

        <ViewportWidthListener 
        setDropdown={setDropdown}

        />
      <div className="logo" >INSURE</div>
        <a
          className="dropdown-icon"
          onClick={dropdownHandel}
        >

          {
            !dropdown ? <FadeIn second="1"><MCloss /></FadeIn> : <FadeIn2 second="2"><MHamburger /></FadeIn2>
          }

        </a>
        {
          dropdown ? null :
            <div className="nav">
              <ul>
                {
                  ['HOW WE WORK', 'BLOG', 'ACCOUNT'].map((item) => {
                    return (
                      <Fragment key={item}>
                        <li>
                          <a href="#">
                            {item}
                          </a>
                        </li>
                      </Fragment>
                    )
                  })
                }
                <li id="menu">
                  <a href="#ViewPlans">
                    VIEW PLANS
                  </a>
                  <ul id="submenu">
                    {
                      [
                        'Difference',
                        'Features',
                        'Creating'
                      ].map((item) => {
                        return (
                          <Fragment key={item}>
                            <li>
                              <a href={`#${item}`}>
                                {item}
                              </a>
                            </li>
                          </Fragment>
                        )
                      })
                    }
                  </ul>
                </li>
              </ul>
            </div>
        }



      </StyledNavigator>
    </>
  )
}
