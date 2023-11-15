import React from "react";
import "./ProductCard.scss"
import { useNavigate } from "react-router-dom";

interface Product{
    title: string,
    price: string,
    description: string,
    seller: string,
    imageUrl: string,
    alt: string,
}

interface ProductCardProps {
    product:Product;
    likedProducts: Product[];
    handleLikeIcon: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, likedProducts, handleLikeIcon })=>{

    const navigate = useNavigate();

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const backgroundColor = {
        backgroundColor: getRandomColor(),
    }

    const isLiked = likedProducts.includes(product);

    const productDetails = ()=>{
        navigate(`/product/${product.alt}`);
    }
    
    return (
        <>
            <div className={`product-card`}>
                <img 
                    src={product.imageUrl} style={backgroundColor} 
                    className="product-img" 
                    alt={`${product.alt}`}
                    onClick={productDetails}
                ></img>
                <div className="title-and-heart">
                    <p className="product-title">{product.title}</p>
                    <i 
                        className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart ${isLiked ? "liked" : "unliked"}`} 
                        onClick={() => handleLikeIcon(product)}
                    ></i>
                </div>
                <p className="product-price">${product.price}</p>
            </div>
        </>
    )
}

export default ProductCard;