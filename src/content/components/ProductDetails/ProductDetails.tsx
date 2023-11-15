import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.scss";

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

const ProductDetails: React.FC<ProductsListProps> = ({productsList}) => {

    const [quantity, setQuantity]=useState(0);

    const { alt } = useParams();
    const navigate = useNavigate()

    const selectedProduct = productsList.find((product) => product.alt === alt);

    const goToHome = () => {
        navigate("/")
    }

    const moreQuantity = ()=>{
        setQuantity((prevQuantity) => prevQuantity + 1);
    }
    const lessQuantity = ()=>{
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    }

    return(
        <>
            {selectedProduct ? (
                <section className="selected-product">
                    <img 
                        className="selected-product-img" 
                        src={`${selectedProduct.imageUrl}`} 
                        alt={`${selectedProduct.alt}`} 
                    ></img>
                    <p className="selected-product-title">{selectedProduct.title}</p>
                    <p className="selected-product-seller">by {selectedProduct.seller}</p>
                    <p className="selected-product-description">{selectedProduct.description}</p>
                    <div className="selected-product-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <p className="rate">4.6</p>
                        <p className="number-of-ratings">{"(3788 ratings)"}</p>
                    </div>
                    <p className="selected-product-price">${selectedProduct.price}</p>
                    <div className="selected-product-separator"></div>
                    <button className="back-button" onClick={goToHome}>{" < "}</button>
                    <div className="bottom-block">
                        <div className="sizes-block">
                            <p>Sizes</p>
                            <div className="sizes-buttons-block">
                                <button>XS</button>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                            </div>
                        </div>
                        <div className="colors-and-quantity-block">
                            <div className="colors-block">
                                <p>Colors</p>
                                <div className="colors-buttons-block">
                                    <button className="red-button">{" "}</button>
                                    <button className="yellow-button">{" "}</button>
                                    <button className="green-button">{" "}</button>
                                </div>
                            </div>
                            <div className="quantity-block">
                                <p>quantity</p>
                                <div className="choose-quantity">
                                    <button onClick={lessQuantity}>-</button>
                                    <p className="quantity-number">{quantity}</p>
                                    <button onClick={moreQuantity}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="add-to-bag">
                        add to bag
                    </span>
                </section>
            ) : (
                <div>
                    <p>Produit non trouvé</p>
                </div>
            )}
        </>
    )
}

export default ProductDetails;