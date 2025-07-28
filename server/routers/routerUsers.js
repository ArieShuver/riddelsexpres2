import { Router } from "express";
import { getAllUsers, addUsers, updateUsers, deleteUsers ,chakUser,getUserName } from "../controllers/controllUser.js";
const router = Router();

router.get("/getAllUsers", getAllUsers)

router.post("/addUsers", addUsers)

router.post("/getUserByName", getUserName);

router.put("/updateUsers", updateUsers)

router.delete("/deleteUsers", deleteUsers)

router.post("/chacUser",chakUser)

export default router;