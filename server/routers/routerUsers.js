import { Router } from "express";
import { getAllUsers, addUsers, updateUsers, deleteUsers,getUserById } from "../controllers/controllUser.js";
const router = Router();

router.get("/getAllUsers", getAllUsers)

router.post("/addUsers", addUsers)

router.post("/getUserById", getUserById);

router.put("/updateUsers", updateUsers)

router.delete("/deleteUsers", deleteUsers)


export default router;