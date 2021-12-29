import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";

function CartItem({ name, imgSrc, price }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => setQty(qty - 1)}
            />
            <AddRounded className="itemAdd" onClick={() => setQty(qty + 1)} />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span>$</span> {parseInt(qty) * parseFloat(price)}
      </p>
    </div>
  );
}

export default CartItem;
