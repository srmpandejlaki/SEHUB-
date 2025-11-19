import React from "react"; 

function TableDistribution() {
  return(
    <div className="table-distribution">
      <table>
        <thead>
            <tr>
                <th className="center">No</th>
                <th>Hari/Tanggal</th>
                <th>Nama Pemesan</th>
                <th>Produk</th>
                <th className="center">Jumlah</th>
                <th className="center">Total</th>
                <th>Nama Pengirim</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Pengemasan</td>
            </tr>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Sudah Diterima</td>
            </tr>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Dalam Perjalanan</td>
            </tr>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Dalam Perjalanan</td>
            </tr>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Dalam Perjalanan</td>
            </tr>
            <tr>
                <td className="center">1</td>
                <td>23 Oktober 2025</td>
                <td>Budiono</td>
                <td>
                  <div className="produk-code">
                    <p className="code">LS-001</p>
                    <p className="name">Seho Granule 150g</p>
                  </div>
                </td>
                <td className="center">15</td>
                <td className="center">15</td>
                <td>Cristiano</td>
                <td>Sudah Diterima</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableDistribution;