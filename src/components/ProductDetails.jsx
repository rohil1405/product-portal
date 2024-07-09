import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    let API = `https://dummyjson.com/products/${id}`;

    const fetchProductData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProductData(API);
    }, [API]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleHome = () => {
        navigate('/');
    }

    return (
        <section className='section details-wrap'>
            <div className='container'>
                <div className='product-details'>
                    <div className='product-img'>
                        <img src={product.images[0]} alt={product.title} />
                        
                        <div className='product-img-wrap'>
                            <div class='small-img'>
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                            <div class='small-img'>
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                            <div class='small-img'>
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                            <div class='small-img'>
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                        </div>
                    </div>
                    <div className='product-content'>
                        <h1>{product.title}</h1>
                        <p style={{textAlign: 'center', fontSize: '18px'}}>{product.description}</p>
                        <hr />
                        <p><b>Brand: </b>{product.brand}</p>
                        <p><b>Tags: </b>{product.tags}</p>
                        <p><b>Sku: </b>{product.sku}</p>
                        <hr/>
                        <p><b>Price: </b>${product.price}
                        <p><b>Rating: </b>{product.rating}</p>
                        <hr />
                        <p><b>Stock: </b>{product.stock}</p>
                        <p><b>Discount: </b>{product.discountPercentage}%</p></p>
                        <p><b>Availability: </b>{product.availabilityStatus}</p>
                        <p><b>{product.warrantyInformation}</b></p>
                        <div class='btn-wrap'>
                            <button id='details-btn'>Add to Cart</button>
                        </div>
                    </div> 
                </div>
                
                <div class='btn-wrap'>
                    <button id='home-btn' onClick={handleHome}>Back</button>
                </div>
                
                <div className='product-reviews'>
                    <div className='reviews-wrap'>
                        {product.reviews.map((review, index) => (
                            <div className='review' key={index}>
                                <h3>Rating: {review.rating}</h3>
                                <h4>{review.reviewerName}: {review.comment}</h4>
                                <p>{new Date(review.date).toDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
