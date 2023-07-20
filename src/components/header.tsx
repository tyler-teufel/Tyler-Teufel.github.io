// Header.tsx

import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import { StyledHeader } from '../Style';


interface Props {
    children?: ReactNode;
    className?: string;
}

const Header: React.FC<Props> = ( {  } : Props) => {

  return (
    <StyledHeader>
      <nav>
        <Link to="./Pages/portfolio"><h1 id="Portfolio">Portfolio</h1></Link>
        <Link to="./Pages/About"><h1 id = "About_Me">About Me</h1></Link>
        <Link to="./Pages/Contact"><h1 id = "Contact">Contact</h1></Link>
        <Link to="./Pages/Resume"><h1 id = "Resume">Resume</h1></Link>
        <Link to="./Pages/Skills"><h1 id = "Skills">Skills</h1></Link>
        <Link to="./Pages/Education"><h1 id="Education">Education</h1></Link>
      </nav>
    </StyledHeader>
  );

};

export default Header;