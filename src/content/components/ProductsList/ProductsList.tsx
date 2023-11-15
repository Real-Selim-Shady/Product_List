import React, { useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";


interface Product{
    title: string,
    price: string,
    description: string,
    seller: string,
    imageUrl: string,
    alt: string,
}

interface ProductsListProps {
    productsList: Product[]; 
}

const ProductsList: React.FC<ProductsListProps>  = ({productsList}) => {

    const [likedProducts, setLikedProducts] = useState<Product[]>([]);



    const handleLikeIcon = (product: Product) => {
        if (likedProducts.includes(product)) {
            setLikedProducts(likedProducts.filter((likedProduct) => likedProduct.description !== product.description));
        } else {
            setLikedProducts([...likedProducts, product]);
        }
    };

    return(
        <>
            <section className="products-list">
                {productsList.map((product: Product) => (
                    <ProductCard 
                        key={product.description} 
                        product={product}   
                        likedProducts={likedProducts}
                        handleLikeIcon={handleLikeIcon}
                    />
                ))}
            </section>
        </>
    )
}

export default ProductsList;