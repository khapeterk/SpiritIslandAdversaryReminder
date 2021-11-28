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
    complexities.add('All');
    data.spirits.forEach((spirit) => {
        complexities.add(spirit.Complexity);
    })
    return Array.from(complexities);
}

function getSpiritNamesForComplexity(complexity) {
    return data.spirits.filter((spirit) => spirit.Complexity === complexity || complexity === 'All').map((spirit) => spirit.Name).sort();
}

function getSpiritsMap() {
    const spirits = {}
    data.spirits.forEach((spirit) => {
        spirits[spirit.Name] = spirit;
    })
    return spirits;
}

function getAdversariesMap() {
    const adversaries = {}
    data.adversaries.forEach((adversary) => {
        adversaries[adversary.ShortName] = adversary;
    })
    return adversaries;
}

function getAdversary(adversaryShortName) {
    return getAdversariesMap()[adversaryShortName];
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
function singlePluralWord(text, number) { return number > 1 ? text + 's' : text }

function shouldHighImmigration(settings) { return settings.selectedAdversary === 'ENGLAND' && settings.selectedLevel >= 3 };

export {
    getRandomIndex,
    removeMultipleRandomFromArray,
    getSpiritComplexities,
    getSpiritNamesForComplexity,
    getSpiritSetup,
    getSpiritPlayStyle,
    getSpiritSpecialRulePhases,
    getSpiritSpecialRules,
    getAdversariesMap,
    getAdversary,
    singlePluralWord,
    shouldHighImmigration
}