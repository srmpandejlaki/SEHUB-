import React from "react";
import { Link } from 'react-router-dom';

function AsideBar() {
  return (
    <div className="aside">
      <div className="logo-sehub">
        <img src="../../assets/public/sehub.png" alt="Logo SEHUB+" />
      </div>
      <div className="navigation">
        <div class="menu">
            <img src="../../assets/icon/menu-g.png" alt="" />
            <p>MENU</p>
        </div>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/distribusi-produk">Distribusi Produk</Link>
          </li>
        </ul>
      </div>
      <div class="companies-name">
          <p>PT. Rumah Seho Nusantara</p>
      </div>
    </div>
  );
}

export default AsideBar;