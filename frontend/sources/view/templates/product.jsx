import React from "react";

function ProductItem({ productName, productSize, productUnit, productImg }) {
  return(
    <div className="product">
      <img src={productImg} alt="" />
      <div className="product-desc">
        <p>{productName}<br/><br/>{productSize}{productUnit}</p>
      </div>
    </div>
  );
}

export default ProductItem;