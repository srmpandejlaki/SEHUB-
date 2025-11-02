import React from "react";
import optionDistribusi from '../../../assets/public/distribusi-produk.png';
import optionInventori from '../../../assets/public/inventori-produk.png';

function OptionHistory() {
  return (
    <div className="content">
      <h3>Mau lihat riwayat data yang mana?</h3>
      <div className="option">
        <img src={optionDistribusi} alt="Opsi Distribusi Produk" />
        <img src={optionInventori} alt="Opsi Inventori Produk" />
      </div>
    </div>
  );
} 

export default OptionHistory;