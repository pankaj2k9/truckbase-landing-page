import styled, { createGlobalStyle } from 'styled-components';
import img from './assests/images/location.svg';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
 } 

 #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }
 .google-place-input > div {
   background-color: rgb(238, 238, 238);
   border:none;
   font-size: 14px;
   padding: 3px 16px 3px 25px;
   min-height: auto!important;
 }
 .google-place-input > div:before {
  content: ""; 
  position: absolute; 
  left: 8px; 
  top: 0; 
  bottom: 0; 
  width: 20px;
  height: 100%; 
  background-image: url(${img});
  background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}
}

`;
export const Main = styled.div`
  flex: 1;
  background-color: rgb(246, 246, 246);
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1408px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  background: ${({ primary }) => (primary ? '#ffffff' : 'rgb(226, 226, 226)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? 'rgb(226, 226, 226)' : '#FFFFFF')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
