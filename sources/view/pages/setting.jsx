import React from "react";
import iconIndonesia from "../../assets/icon/indonesia.png";
import iconEnglish from "../../assets/icon/english.png";
import iconFrance from "../../assets/icon/france.png";

function SettingPage() {
  return (
    <div className="content setting">
      <div className="product-display">
        <h2>PRODUK</h2>
      </div>
      <div className="other-setting">
        <div className="languages-setting">
          <div className="text">
            <h4>BAHASA</h4>
            <p>Bahasa yang digunakan saat ini :</p>
          </div>
          <div className="icon-languages">
            <div className="language">
              <img src={iconIndonesia} alt="" />
              <p>Indonesia</p>
            </div>
            <div className="language">
              <img src={iconEnglish} alt="" />
              <p>English</p>
            </div>
            <div className="language">
              <img src={iconFrance} alt="" />
              <p>France</p>
            </div>
          </div>
        </div>
        <div className="clear-data-setting">
          <div className="text">
            <h4>PEMBERSIHAN DATA</h4>
          </div>
          <div className="sub-setting">
              <h5>BERSIHKAN DATA INVENTORI PRODUK</h5>
            <div className="btn-setting">
              <p>Semua data inputan inventori produk akan terhapus secara permanen.</p>
              <button className="base-btn red">hapus data</button>
            </div>
          </div>
          <div className="sub-setting">
              <h5>BERSIHKAN DATA DISTRIBUSI PRODUK</h5>
            <div className="btn-setting">
              <p>Semua data inputan distribusi produk akan terhapus secara permanen.</p>
              <button className="base-btn red">hapus data</button>
            </div>
          </div>
          <div className="sub-setting">
              <h5>RESET APLIKASI</h5>
            <div className="btn-setting">
              <p>Semua data yang ada akan terhapus secara permanen.</p>
              <button className="base-btn red">reset sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;