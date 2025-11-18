import React from "react";
import { Link } from 'react-router-dom';
import IconListProduct from "../../assets/icon/ep_list.svg?react";
import IconInventoryProduct from "../../assets/icon/material-symbols_inventory.svg?react";
import IconDistribution from "../../assets/icon/lsicon_distribution-filled.svg?react";

function NavProduct() {
  return (
    <div className="nav-product">
      <ul>
        <li>
          <IconListProduct className="icon" />
          <Link to="/product" >Produk</Link>
        </li>
        <li>
          <IconInventoryProduct className="icon" />
          <Link to="/product/inventory" >Inventori Produk</Link>
        </li>
        <li>
          <IconDistribution className="icon" />
          <Link to="/product/distribution" >Distribusi Produk</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavProduct;