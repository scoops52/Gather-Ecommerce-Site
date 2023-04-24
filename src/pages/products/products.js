import Categories from '@/components/Input/Categories/Categories'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import React from 'react'
import { CategorySection, ProductsStyled } from './products.styles'

const Products = () => {
    return (
        <ProductsStyled>
            <CategorySection>
                <Categories categories={["electronics", "jewelery", "men's clothing", "women's clothing"]} />
            </CategorySection>
            <ProductGrid />
        </ProductsStyled>
    )
}

export default Products