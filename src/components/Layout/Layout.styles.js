import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`;

export const LayoutHeader = styled(Header)`
    grid-row: 1;
`;

export const LayoutMain = styled.div`
    grid-row: 2;
    padding: 0.5rem;
`;

export const LayoutFooter = styled(Footer)`
    grid-row 3;
`