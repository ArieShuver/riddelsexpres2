import { Router } from "express";
import { getAllRiddles, addRiddles, updateRiddles, deleteRiddles } from "../controllers/controllersRiddels.js";
import { veryfyToken, chacAdmin } from "../middlewares/veryFt.js";
const router = Router();

router.get("/allriddles", getAllRiddles)

router.post("/addRiddle", veryfyToken, addRiddles)

router.put("/updateRiddle", veryfyToken, chacAdmin, updateRiddles)

router.delete("/deleteRiddle", veryfyToken, chacAdmin, deleteRiddles)


export default router;
