import React from 'react';
import './Menu.scss';
import Product from '../Product/Product';
import ProductsData from '../../data/products.json';

function Menu() {
    return (
        <div className="menu">
            {ProductsData.map((product) => {
                return(
                    <Product 
                        img={product.img}
                        name={product.name}
                        price={product.price}
                    />
                )
            })}
            {/* <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            />
            <Product 
                img="http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg"
                name="Pizza"
                price="$12"
            /> */}
        </div>
    )
}

export default Menu
