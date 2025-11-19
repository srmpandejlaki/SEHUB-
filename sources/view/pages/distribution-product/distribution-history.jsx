import React from "react";
import NavProduct from "../../../components/base/nav-product";
import SearchFilter from "../../../components/base/search-filter";
import NavDistribution from "../../../components/base/nav-distribution";
import TableDistribution from "../../../components/product-page/table-distribution";
import FormDataDistribution from "../../../components/product-page/form-data-distribution";

function DistributionHistoryPage() {
  return(
    <div className="content distribution-history">
      <NavProduct />
      <div className="main-distribution">
        <div className="header-distribution-history">
          <p>Riwayat Data Distribusi Produk</p>
          <div className="distribution-display">
            <SearchFilter />
            <NavDistribution />
          </div>
        </div>
        <TableDistribution />
        <div className="form-overlay">
          <FormDataDistribution /> 
        </div>
      </div>
    </div>
  );
}

export default DistributionHistoryPage;