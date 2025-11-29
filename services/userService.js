import dataGame from "../data.js" ;

async function getAllGame(filters) {
    if(!filters || Object.keys(filters).length === 0) {
        return dataGame ;
    }

    let filteredGames = dataGame ;
    if(filters.Harga) {
        filteredGames = filteredGames.filter(game => {
            return game.Harga <= filters.Harga ;
        })
    }else if(filters.Nama) {
        filteredGames = filteredGames.filter(game => {
            return game.Nama.toLowerCase().includes(filters.Nama.toLowerCase()) ;
        })
    }else{
        throw new Error("Permitted filters Only Nama and Harga") ;
    }

    return filteredGames ;
}

async function getGamebyID(ID) {
    const gameID = parseInt(ID) ;
    const game = dataGame.find((g) => g.id===gameID) ;
    if(!game) {
        throw new Error ("Game not found") ;
    }
    return game ;
}

async function updateGame(ID, gameData) {
    const gameID = parseInt(ID) ;
    const gameIndex = dataGame.findIndex((g) => g.id === gameID) ;

    if(gameIndex === -1) {
        throw new Error ("Game not found") ;
    }

    dataGame[gameIndex].Nama = gameData.Nama || dataGame[gameIndex].Nama ;
    dataGame[gameIndex].OS = gameData.OS || dataGame[gameIndex].OS ;
    dataGame[gameIndex].Processor = gameData.Processor || dataGame[gameIndex].Processor ;
    dataGame[gameIndex].Memory = gameData.Memory || dataGame[gameIndex].Memory ;
    dataGame[gameIndex].Graphics = gameData.Graphics || dataGame[gameIndex].Graphics ;
    dataGame[gameIndex].Storage = gameData.Storage || dataGame[gameIndex].Storage ;
    dataGame[gameIndex].Harga = gameData.Harga || dataGame[gameIndex].Harga ;
    return dataGame[gameIndex] ;
}

async function deleteGame(ID) {
    const gameID = parseInt(ID) ;
    const gameIndex = dataGame.findIndex((g) => g.id === gameID) ;

    if(gameIndex === -1) {
        throw new Error("Game not found") ;
    }

    const deletedGame = dataGame.splice(gameIndex, 1) ;
    return deletedGame [0] ;
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
    updateGame,
    deleteGame,
    addGame
};