import React from "react";
import '../../../styles/pages/segemnts/product.scss';

const Product = (props) => {
    
    return (
        <div className="product">
         <h1>{props.product.name}</h1>
         {/* <img src={props.product.product_pic_id} alt={#}*/}
         <div>
            <p>details: {props.product.details}</p>
            <p>cost: {props.product.cost}</p>
            <p>price: {props.product.stock}</p>
         </div>
        </div>
    )
}

export default Product;