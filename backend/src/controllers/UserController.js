import UserServices from "../services/UserServices.js";

const UserController = {
  getAllUser: async (req, res) => {
    const result = await UserServices.getUsers();
    res.json(result);
  },
  getUserById: async (req, res) => {
    const result = await UserServices.getUserById(req.params.id_user);
    res.json(result);
  },
  createUser: async (req, res) => {
    const result = await UserServices.createUser(
      req.body.name,
      req.body.email,
      req.body.jabatan,
      req.body.status,
      req.body.password
    );
    res.json(result);
  },
  updateUser: async (req, res) => {
    const result = await UserServices.updateUser(
      req.body.name,
      req.body.email,
      req.body.jabatan,
      req.body.status,
      req.body.password,
      req.params.id_user
    );
    res.json(result);
  },
  deleteUser: async (req, res) => {
    const result = await UserServices.deleteUser(req.params.id_user);
    res.json(result);
  },
  deleteAllUser: async (req, res) => {
    const result = await UserServices.deleteAllUser();
    res.json(result);
  },
};

export default UserController;