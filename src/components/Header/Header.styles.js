import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.secondary};
    padding: 1rem;

`

export const SectionStyled = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1;
    justify-content: space-around;
`

export const CartIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: ${props => props.theme.colors.primary}
`