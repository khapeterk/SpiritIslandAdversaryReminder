function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function removeRandomFromArray(array) {
    return array.splice(getRandomIndex(array), 1)[0]
}

function removeMultipleRandomFromArray(array, count) {
    let currentArray = [...array];
    let temporaryBoards = [];
    for (let i = 0; i < count; i++) {
        temporaryBoards.push(removeRandomFromArray(currentArray));
    }
    return temporaryBoards;
}

export {
    getRandomIndex,
    removeMultipleRandomFromArray
}