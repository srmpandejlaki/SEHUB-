import React from "react";
import LanguageSetting from "../../components/setting-section/language";
import ClearDataSetting from "../../components/setting-section/clear-data";
import BackBtn from "../../components/button/back-btn";
import AddProductBtn from "../../components/button/add-product-btn";
import ProductItems from "../../components/setting-section/product-items";

function SettingPage() {
  return (
    <div className="content setting">
      <div className="product-display">
        <h4>PRODUK</h4>
        <ProductItems />
        <div className="button-side">
          <BackBtn />
          <AddProductBtn />
        </div>
      </div>
      <div className="other-setting">
        <LanguageSetting />
        <ClearDataSetting />
      </div>
    </div>
  );
}

export default SettingPage;