import React from "react";
import { Link } from 'react-router-dom';
import NavProduct from "../../../components/base/nav-product";
import SearchFilter from "../../../components/base/search-filter";
import IconLaporan from "../../../assets/icon/lsicon_report-outline.svg?react";
import IconTambah from "../../../assets/icon/mdi_add-bold.svg?react";
import IconKembali from "../../../assets/icon/lets-icons_back.svg?react";
import IconX from "../../../assets/icon/mdi_cancel-bold.svg?react";

function DistributionHistoryPage() {
  return(
    <div className="content distribution-history">
      <NavProduct />
      <div className="main-inventory">
        <div className="inventory-display">
          <p>Pratinjau Data Distribusi Produk</p>
          <div className="header-distribution">
            <SearchFilter />
            <div className="button">
              <div className="base-btn black">
                <IconLaporan className="icon whiteIcon" />
                <p>Buat Laporan</p>
              </div>
              <div className="base-btn black">
                <IconTambah className="icon whiteIcon" />
                <p>Tambah Data</p>
              </div>
              <div className="base-btn black">
                <Link to="/product/distribution" >
                  <IconKembali className="icon whiteIcon" />Kembali
                </Link>
              </div>
              <IconX className="blackIcon" />
            </div>
          </div>
        </div>
        <div className="">
        </div>
      </div>
    </div>
  );
}

export default DistributionHistoryPage;