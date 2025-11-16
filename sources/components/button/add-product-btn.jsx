import React from "react";
import IconAddProduct from "../../assets/icon/Vector-3.svg?react";

function AddProductBtn() {
  return (
    <div className="base-btn black">
      <IconAddProduct className="icon" />
      <p>tambah produk</p>
    </div>
  );
}

export default AddProductBtn;