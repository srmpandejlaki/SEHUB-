import express from "express";
import UserController from "../controllers/UserController";

const routerUsers = express.Router();

router.get("/", UserController.getAllUser);
router.get("/:id_user", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id_user", UserController.updateUser);
router.delete("/:id_user", UserController.deleteUser);
router.delete("/", UserController.deleteAllUser);

export default routerUsers;