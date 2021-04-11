import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 

 #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }

`;
export const Main = styled.div`
flex:1;
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
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
