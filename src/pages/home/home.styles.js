import styled from "styled-components";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { images } from "@/assets";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    background-image: url(${props => props.image.src});
    background-size: cover;
    background-position: top;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    }

    & > * {
    z-index: 2;
  }
`;

export const HomeTitle = styled.h1`
    color: ${props => props.theme.colors.darkBlue80};
    font-size: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    


`
export const ButtonLink = styled.button`
    padding: 15px 20px;
   font-size: 16px;
   font-weight: 500;
   color: ${props => props.theme.colors.neutralColor00};
   background-color: ${props => props.theme.colors.primary};
   border: none;
   border-radius: 40px;
   cursor: pointer;
   

   &:hover {
    background-color: ${props => props.theme.colors.darkBlue40};
   }

`;

