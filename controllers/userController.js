import {
    getAllGame,
    getGamebyID,
    updateGame,
    deleteGame,
    addGame
} from "../services/userService.js" ;

async function getAllGameController(req, res) {
    try {
        const allGame = await getAllGame(req.query) ;
        if(allGame.length === 0) {
            return res.status(404).json({ message: "No games found"}) ;
        }
        res.status(200).json(allGame) ;
    } catch (error) {
        if(error.message === "Permitted filters Only Nama and Harga") {
            res.status(400).json({message: error.message}) ;
        }else {
            res.status(500).json({message: error.message}) ;
        }
    }
}

async function getGamebyIDController(req, res) {
    try {
        const game = await getGamebyID(req.params.ID) ;
        res.status(200).json(game) ;
    } catch (error) {
        if(error.message === "Game not found") {
            res.status(404).json({message: error.message}) ;
        }else {
            res.status(500).json({message: error.message}) ;
        }
    }
}

async function updateGameController(req, res) {
    try {
        const updatedGame = await updateGame(req.params.ID, req.body) ;
        res.status(200).json({message: "Game updated successfully", updatedGame}) ;
    } catch (error) {
        if(error.message === "Game not found") {
            res.status(404).json({message: error.message}) ;
        }else {
            res.status(500).json({message: error.message}) ;
        }
    }
}

async function deleteGameController(req, res) {
    try {
        const deletedGame = await deleteGame(req.params.ID) ;
        res.status(200).json({message: "Game deleted successfully", deletedGame}) ;
    } catch (error) {
        if(error.message === "Game not found") {
            res.status(404).json({message: error.message}) ;
        }else {
            res.status(500).json({message: error.message}) ;
        }
    }
}

async function addGameController(req, res) {
    const { Nama, OS, Processor, Memory, Graphics, Storage, Harga } = req.body ;

    const missingFields = [] ;

    if (!Nama) missingFields.push("Nama") ;
    if (!OS) missingFields.push("OS") ;
    if (!Processor) missingFields.push("Processor") ;
    if (!Memory) missingFields.push("Memory") ;
    if (!Graphics) missingFields.push("Graphics") ;
    if (!Storage) missingFields.push("Storage") ;
    if (!Harga) missingFields.push("Harga") ;

    if (missingFields.length > 0) {
        let isare = "is" ; if(missingFields.length > 1) isare = "are" 
        
        return res.status(400).json({ 
            message: `${missingFields.join(", ")} ${isare} required` 
        });
    }

    try {
      const newGame = await addGame(req.body) ;
      res.status(201).json(newGame) ;  
    } catch (error) {
        res.status(500).json({message: error.message}) ;
    }
}

export {
    getAllGameController,
    getGamebyIDController,
    updateGameController,
    deleteGameController,
    addGameController
} ;
