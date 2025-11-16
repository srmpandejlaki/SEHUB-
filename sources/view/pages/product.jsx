import React from "react";
import SearchFilter from "../../components/base/search-filter";
import ProductItems from "../../components/product-page/product-items";
import NavProduct from "../../components/base/nav-product";
import AddProductBtn from "../../components/button/add-product-btn";
import FormProduct from "../../components/product-page/form-product";

function ProductPage() {
  return(
    <div className="content product-page">
      <NavProduct />
      <div className="product-display">
        <div className="header-product-page">
          <p>Daftar Produk</p>
          <AddProductBtn />
        </div>
        <SearchFilter />  
        <ProductItems />
      </div>
      <FormProduct />
    </div>
  );
}

export default ProductPage;