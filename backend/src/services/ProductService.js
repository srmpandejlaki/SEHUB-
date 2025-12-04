const UserModel = require("../models/ProductModel");

const ProductService = {
  getProducts: async () => {
    return await UserModel.getAll();
  },

  createProduct: async (nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product) => {
    return await UserModel.create(nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product);
  },
};

module.exports = ProductService;
