import React from "react";
import IconListProduct from "../../assets/icon/ep_list.svg?react";
import IconInventoryProduct from "../../assets/icon/material-symbols_inventory.svg?react";
import IconDistribution from "../../assets/icon/lsicon_distribution-filled.svg?react";

function NavProduct() {
  return (
    <div className="nav-product">
      <ul>
        <li>
          <IconListProduct className="icon" />
          <p>Produk</p>
        </li>
        <li>
          <IconInventoryProduct className="icon" />
          <p>Inventori Produk</p>
        </li>
        <li>
          <IconDistribution className="icon" />
          <p>Distribusi Produk</p>
        </li>
      </ul>
    </div>
  );
}

export default NavProduct;