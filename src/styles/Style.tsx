import styled from 'styled-components';


export const Menu = `
:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  a {
    font-weight: 500;
    color: white;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
    
  }
  
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  
  
  input {
    font-size: 1.2em;
    font-weight: 500;
    font-family: inherit;
    
    
    
  
  }
  input:hover {
    border-color: #535bf2;
   
  }
  input:focus,
  input:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  
  
  
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
        background-color: #f9f9f9;
    }
  }

  .header {
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
  }

  #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

.name {
  font-size: 1.5em;
  font-weight: 500;
  margin: 0.5em 0;
  border: 1px solid transparent;
  height: auto;
}

.name:hover {
  color: inherit;
  text-decoration: none;
  box-shadow: none;
}



    
    


`;

export const StyledFooter = styled.footer`
    display: flex;
    background-color: #282c34;
    z-index: 100;
    width: 100%;
    color: white;
    padding: 0 20px;
    left: 0;
    bottom: 0;
    position: fixed;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    h1 {
        margin: auto;
        
        
    }






`;