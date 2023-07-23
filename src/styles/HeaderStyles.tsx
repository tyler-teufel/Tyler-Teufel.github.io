import styled from "styled-components";

export const HeaderStyle = styled.header`


    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    display: flex;
    background-color: #282c34;
    z-index: 100;
    width: 100%;    
    left: 0;
    top: 0;
    position: fixed;
    height: 60px;
    
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  

  
  .NavBar {
    margin: 0 0 0 20px;
    text-decoration: none;
    font-weight: bold;
    font-size: 24pt;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 100%;

  }

`;