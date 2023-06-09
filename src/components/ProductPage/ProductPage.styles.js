import styled from "styled-components";
import { ProductName, ProductPrice } from "../ProductCard/ProductCard.styles";

export const ProductPageWrapper = styled.div`
    display: flex;
    gap: 30px;
`

export const ProductImageWrapper = styled.div`
    max-width: 50%;
    flex: 1 1;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductPageImage = styled.img`
    width: 50%;
    border-radius: 10px;
`

export const ProductPageInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    flex: 1 1;
    
`
export const ProductPageName = styled(ProductName)`
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
`
export const ProductPageDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const ProductPagePrice = styled(ProductPrice)`
    font-size: 18px;
`

export const ProductDescription = styled.p`
    color: ${props => props.theme.colors.neutralColor60};
    font-size: 18px;
    width: 80%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`