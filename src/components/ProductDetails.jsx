import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
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

    return (
        <div className='product-details'>
            <img src={product.images[0]} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductDetails;
