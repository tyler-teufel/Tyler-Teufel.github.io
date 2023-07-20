
import { ReactNode } from "react";
import { StyledFooter} from '../Style';



interface FooterProps {
    children?: ReactNode;
    className?: string;
    
}


export const Footer = ( { children, className } : FooterProps) => {
    
    return <StyledFooter className={className}>{children}</StyledFooter>;

}