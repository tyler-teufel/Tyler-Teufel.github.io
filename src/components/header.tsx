// Header.tsx

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from '../styles/Style';
import { HeaderStyle } from '../styles';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const Header: React.FC<Props> = ({}: Props) => {
  return (
   <>
    <HeaderStyle />
      <nav>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/about">About</Link>  
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>

      </nav>
   </>
  )
}
/*
import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import { Menu } from '../styles/Style';



interface Props {
    children?: ReactNode;
    className?: string;
}

const Header: React.FC<Props> = ( {  } : Props) => {

  return (
    
    
      <>
      <div className="header">
      <style>{Menu}</style><nav className=".NavBar">
      
      <Link to="/"><h1>Portfolio</h1></Link>
      <Link to="/about"><h1>About Me</h1></Link>
      <Link to="/Contact"><h1>Contact</h1></Link>
      <Link to="/Resume"><h1>Resume</h1></Link>
      <Link to="/Skills"><h1>Skills</h1></Link>
      <Link to="/Education"><h1>Education</h1></Link>
    </nav>
    </div>
    </>
    
  );

};

export default Header;*/