import React from "react";
import IconEditProduct from "../../assets/icon/flowbite_edit-outline.svg?react";
import IconCancel from "../../assets/icon/material-symbols_cancel.svg?react";

function FormDataDistribution() {
  return(
    <div className="form-data-distribution">
      <div className="form-header">
        <div>
          <IconEditProduct className="icon darkGreenIcon" />
          <p>Tambah Produk</p>
        </div>
        <IconCancel className="icon" />
      </div>
      <form action="" className="main-form">
        <div className="left-side">
          <div className="inputan">
            <label htmlFor="">Hari/Tanggal</label>
            <input type="date" placeholder="Masukkan tanggal" />
          </div>
          <div className="inputan">
            <label htmlFor="">Nama Pemesan</label>
            <input type="text" placeholder="Masukkan nama pemesan" />
          </div>
          <div className="inputan">
            <label htmlFor="">Metode Pengiriman</label>
            <select name="Metode Pengiriman" id="">
              <option value="Seho Sirop">Pengantaran Langsung</option>
              <option value="Seho Granule">Jasa Kurir</option>
              <option value="Seho Block">Ambil di Tempat</option>
              <option value="Seho Block">+ Metode Baru</option>
            </select>
          </div>
          <div className="inputan">
            <label htmlFor="">Nama Pengirim</label>
            <input type="text" placeholder="Masukkan nama pengirim" />
          </div>
          <div className="inputan">
            <label htmlFor="">Status</label>
            <select name="Status" id="">
              <option value="Seho Sirop">Pengemasan</option>
              <option value="Seho Granule">Dalam Pengantaran</option>
              <option value="Seho Block">Sudah Diterima</option>
              <option value="Seho Block">+ Status Baru</option>
            </select>
          </div>
        </div>
        <div className="right-side">
          <div className="double-form">
            <div className="inputan">
              <label htmlFor="">Nama Produk</label>
              <select name="Nama Produk" id="">
                <option value="Seho Sirop">Seho Sirop</option>
                <option value="Seho Granule">Seho Granule</option>
                <option value="Seho Block">Seho Block</option>
                <option value="Seho Block">+ Produk Baru</option>
              </select>
            </div>
            <div className="inputan">
              <label htmlFor="">Ukuran</label>
              <input type="text" placeholder="0" />
            </div>
          </div>
          <div className="inputan">
            <label htmlFor="">Keterangan</label>
            <input type="text" placeholder="Ketik sesuatu.." />
          </div>
          <div className="button">
            <button className="base-btn green">Simpan</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormDataDistribution;