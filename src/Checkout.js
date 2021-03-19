import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                    alt=""
                />
                <div>


                    <h2 className="checkout__title">
                        your shopping basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__left">
                <Subtotal />
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
