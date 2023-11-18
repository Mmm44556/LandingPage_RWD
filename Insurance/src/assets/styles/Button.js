import styled from "styled-components";
const Button = styled.button.attrs(({ type }) => ({
  type: type
}))`
  display:block;
  font-family:karla-700;
  letter-spacing:2px;
  padding:10px 35px;
  border: 1px solid hsl(0, 0%, 98%);
  border-width:2px;
  color:hsl(0, 0%, 98%);
  outline:none;
  background-color:inherit;
`



export default Button;