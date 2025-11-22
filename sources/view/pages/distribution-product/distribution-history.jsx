import React, { useState } from "react";
import NavProduct from "../../../components/base/nav-product";
import SearchFilter from "../../../components/base/search-filter";
import NavDistribution from "../../../components/base/nav-distribution";
import TableDistribution from "../../../components/product-page/table-distribution";
import FormDataDistribution from "../../../components/product-page/form-data-distribution";

function DistributionHistoryPage() {
  const [showNavDis, setNavDis] = useState(true);
  const [showFormDis, setFormDis] = useState(false);

  // const handleOpenNavDis = () => {
  //   setNavDis(true);
  // };

  const handleCloseNavDis = () => {
    setNavDis(false);
  };

  const handleOpenFormDis = () => {
    setFormDis(true);
  };

  const handleCloseFormDis = () => {
    setFormDis(false);

  };

  return(
    <div className="content distribution-history">
      <NavProduct />
      <div className="main-distribution">
        <div className="header-distribution-history">
          <p>Riwayat Data Distribusi Produk</p>
          <div className="distribution-display">
            <SearchFilter />
            {showNavDis && (
              <NavDistribution onClose={handleCloseNavDis} openForm={handleOpenFormDis} />
            )}
          </div>
        </div>
        <TableDistribution />
        {showFormDis && (
          <div className="form-overlay">
            <FormDataDistribution onCloseForm={handleCloseFormDis} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DistributionHistoryPage;