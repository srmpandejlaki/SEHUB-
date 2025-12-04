const db = require("../config/db");

const ProductModel = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM product ORDER BY id DESC");
    return result.rows;
  },

  create: async (nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product) => {
    const result = await db.query(
      "INSERT INTO product (nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product]
    );
    return result.rows[0];
  },
};

module.exports = ProductModel;
