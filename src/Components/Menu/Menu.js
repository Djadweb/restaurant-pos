import React from 'react';
import './Menu.scss';
import Product from '../Product/Product';
import ProductsData from '../../data/products.json';

function Menu({addItems}) {
    const clickHandler = (product) => {
        addItems(product);
    }
    return (
        <div className="menu">
            {ProductsData.map((product, index) => {
                return(     
                    <button key={index} onClick={() => clickHandler(product)}>
                        <Product key={index}  
                            img={product.img}
                            name={product.name}
                            price={product.price}
                        />                        
                    </button>                                   
                )
            })}           
        </div>
    )
}

export default Menu
