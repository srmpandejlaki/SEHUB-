import ProductModel from "../models/ProductModel.js";

const ProductService = {
  getProducts: async () => {
    return await ProductModel.getAll();
  },

  createProduct: async (nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product) => {
    return await ProductModel.create(nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product);
  },
};

export default ProductService;
