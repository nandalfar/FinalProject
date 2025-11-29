import express from "express" ;
import {
    getAllGameController,
    getGamebyIDController,
    addGameController
} from "../controllers/userController.js" ;
const router = express.Router() ;

router.get("/games", getAllGameController) ;
router.get("/games/:id", getGamebyIDController) ;
router.post("/games", addGameController) ;

export default router ;