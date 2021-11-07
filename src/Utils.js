import data from "./data";

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

function getSpiritComplexities() {
    const complexities = new Set();
    data.spirits.forEach((spirit) => complexities.add(spirit.Complexity));
    return Array.from(complexities);
}

function getSpiritNames() {
    return data.spirits.map((spirit) => spirit.Name);
}

function getSpiritsMap() {
    const spirits = {}
    data.spirits.forEach((spirit) => {
        spirits[spirit.Name] = spirit;
    })
    return spirits;
}

function getSpiritSetup(spiritName) {
    return getSpiritsMap()[spiritName].Setup;
}

function getSpiritPlayStyle(spiritName) {
    return getSpiritsMap()[spiritName]["Play Style"];
}

function getSpiritSpecialRulePhases(spiritName) {
    return getSpiritsMap()[spiritName].SpecialRulePhases;
}

function getSpiritSpecialRules(spiritName) {
    return getSpiritsMap()[spiritName]["Special Rules"];
}

export {
    getRandomIndex,
    removeMultipleRandomFromArray,
    getSpiritComplexities,
    getSpiritNames,
    getSpiritSetup,
    getSpiritPlayStyle,
    getSpiritSpecialRulePhases,
    getSpiritSpecialRules
}