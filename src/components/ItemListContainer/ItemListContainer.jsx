import React, { useState, useEffect } from 'react';
import { CardComponent } from './cards/CardComponent';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/data/productsData.json');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="product-list">
                {products.map((product, id) => (
                    <CardComponent key={id} product={product} />
                ))}
            </div>
        </>
    );
};


// export const ItemListContainer = () => {

//     return (
//         <>
//             <div className="product-list">
//                 {products.map((product, id) => (
//                     <CardComponent key={id} product={product} />
//                 ))}
//             </div>
//         </>
//     );
// };
