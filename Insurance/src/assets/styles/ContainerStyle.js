import styled from "styled-components";

const ContainerStyle = styled.div`
height:inherit;
 display:grid;
 grid-template-areas:
 "nav" 
 "header" 
 "main" 
 "footer" 
 ;
 grid-template-columns:repeat(4,100%);
  // grid-template-rows: 40% 30% 20% 1fr;
`;

export default ContainerStyle;