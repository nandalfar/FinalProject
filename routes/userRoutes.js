import express from "express" ;
import {
    getAllGameController,
    getGamebyIDController,
    updateGameController,
    deleteGameController,
    addGameController
} from "../controllers/userController.js" ;
const router = express.Router() ;

router.get("/games", getAllGameController) ;
router.get("/games/:ID", getGamebyIDController) ;
router.patch("/games/:ID", updateGameController) ;
router.delete("/games/:ID", deleteGameController) ;
router.post("/games", addGameController) ;

export default router ;