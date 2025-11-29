import dataGame from "../data.js" ;

async function getAllGame() {
    return dataGame ;
}

async function getGamebyID(ID) {
    const gameID = parseInt(ID) ;
    const game = dataGame.find((g) => g.id===gameID) ;
    if(!game) {
        throw new Error ("Game not found") ;
    }
    return game ;
}

async function addGame(gameData) {
    const newGame = {
        id: dataGame.length + 1,
        Nama: gameData.Nama,
        OS: gameData.OS,
        Processor: gameData.Processor,
        Memory: gameData.Memory,
        Graphics: gameData.Graphics,
        Storage: gameData.Storage,
        Harga: gameData.Harga,
    }

    dataGame.push(newGame) ;
    return newGame ;
}

export {
    getAllGame,
    getGamebyID,
    addGame
};