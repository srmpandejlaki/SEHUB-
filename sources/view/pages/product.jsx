import React from "react";
import SearchFilter from "../../components/base/search-filter";
import ProductItems from "../../components/product-page/product-items";
import NavProduct from "../../components/base/nav-product";
import AddProductBtn from "../../components/button/add-product-btn";

function ProductPage() {
  return(
    <div className="content">
      <NavProduct />
      <div className="product-page">
        <div className="header-product-page">
          <p>Daftar Produk</p>
          <AddProductBtn />
        </div>
        <SearchFilter />  
        <ProductItems />
      </div>
      </div>
  );
}

export default ProductPage;