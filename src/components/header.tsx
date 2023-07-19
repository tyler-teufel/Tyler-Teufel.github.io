
import { ReactNode } from "react";
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    background-color: #282c34;
    z-index: 100;
    width: 100%;
    color: white;
    padding: 0 20px;
    left: 0;
    top: 0;
    position: fixed;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    h1 {
        margin: auto;
        
        
    }






`

interface HeaderProps {
    children?: ReactNode;
    className?: string;
    
}


export const Header = ( { children, className } : HeaderProps) => {
    
    return <StyledHeader className={className}>{children}</StyledHeader>;

}