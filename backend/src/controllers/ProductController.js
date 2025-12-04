const UserService = require("../services/ProductService");

const ProductController = {
  getProducts: async (req, res) => {
    try {
      const users = await UserService.getProducts();
      res.json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product } = req.body;
      const newProduct = await UserService.createProduct(nama_product, ukuran_product, ukuran_satuan, kemasan_product, img_product);
      res.json({ success: true, message: "Product created", data: newProduct });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = ProductController;
