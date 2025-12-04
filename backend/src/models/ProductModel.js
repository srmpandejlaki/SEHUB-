import db from "../config/db.js";

const ProductModel = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM product ORDER BY id_product DESC");
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

export default ProductModel;
