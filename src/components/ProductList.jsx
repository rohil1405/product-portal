import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    let API = 'https://dummyjson.com/products';

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    if (!products) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className='product-list'>
                <div className='product-list-wrap'>
                    {products.map(product => (
                        <div key={product.id} id='product-list'>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.images[0]} alt={product.title} />
                            </Link>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>

                            <p className='product-actions'>
                                <button>Add to Cart</button>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList;
