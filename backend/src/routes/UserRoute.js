import express from "express";
import UserController from "../controllers/UserController.js";

const routerUsers = express.Router();

routerUsers.get("/", UserController.getAllUser);
routerUsers.get("/:id_user", UserController.getUserById);
routerUsers.post("/", UserController.createUser);
routerUsers.put("/:id_user", UserController.updateUser);
routerUsers.delete("/:id_user", UserController.deleteUser);
routerUsers.delete("/", UserController.deleteAllUser);

export default routerUsers;