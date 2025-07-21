import { Router } from "express";
import { getAllRiddles,addRiddles,updateRiddles,deleteRiddles} from "../controllers/controllersRiddels.js";
const router = Router();

router.get("/allriddles", getAllRiddles)

router.post("/addRiddle", addRiddles)

router.put("/updateRiddle", updateRiddles)

router.delete("/deleteRiddle", deleteRiddles)


export default router;
