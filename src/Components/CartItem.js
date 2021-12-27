import React from "react";

function CartItem({ name, imgSrc, qty, price }) {
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <p className="itemQuantity">
          <span>x</span> {qty}
        </p>
      </div>
      <p className="itemPrice">
        <span>$</span> {parseInt(qty) * parseFloat(price)}
      </p>
    </div>
  );
}

export default CartItem;
