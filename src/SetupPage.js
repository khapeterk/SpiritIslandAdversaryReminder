import { useState } from 'react';
import data from './data';
import { RadioButtonWithKey } from './Reusable';

export default function SetupPage(props) {
    const { incrementAppIndex, decrementAppIndex, currentAdversary, currentLevel } = props;
    const adversaries = data.adversaries;
    const adversarySetup = {
        "THE TSARDOM OF RUSSIA": [1, 4, 5],
        "THE KINGDOM OF ENGLAND": [2, 3, 4, 6],
        "THE KINGDOM OF SWEDEN": [2, 4, 6],
        "THE HAPSBURG MONARCHY (LIVESTOCK COLONY)": [2, 3, 5],
        "THE KINGDOM OF SCOTLAND": [1, 2, 4],
        "THE KINGDOM OF FRANCE (PLANTATION COLONY)": [1, 2, 3],
        "THE KINGDOM OF BRANDENBURG-PRUSSIA": [1],
    };
    if (adversaries[currentAdversary].name === "THE KINGDOM OF BRANDENBURG-PRUSSIA" && currentLevel > 1) {
        adversarySetup[adversaries[currentAdversary].name].push(currentLevel);
    }
    const displayLevels = adversarySetup[adversaries[currentAdversary].name].filter(level => level <= currentLevel);
    const numberOfPlayersOptions = [1, 2, 3, 4, 5, 6];
    const boardsOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
    const [selectedNumberOfPlayers, setSelectedNumberOfPlayers] = useState(1);
    const [selectedBoards, setSelectedBoards] = useState([]);
    const getRandomBoards = () => {
        let currentBoardsOptions = [...boardsOptions];
        let temporaryBoards = [];
        for (let i = 0; i < selectedNumberOfPlayers; i++) {
            temporaryBoards.push(currentBoardsOptions.splice(Math.floor(Math.random() * currentBoardsOptions.length), 1)[0])
        }
        setSelectedBoards(temporaryBoards);
    }
    const onClickNumberOfPlayers = (event) => {
        setSelectedNumberOfPlayers(event.target.value);
    }
    return (
        <div>
            <header>Setup</header>
            <div>Adversary Name: {adversaries[currentAdversary].name} </div>
            <div>Current Level: {currentLevel} </div>
            <ul>
                <li>Put Disease in Land #2</li>
                <li>Put Beast in lowest numbered land without setup symbol</li>
                {displayLevels.map((level, index) => <li key={index}>{adversaries[currentAdversary].Level[level]["Game Effects"]}</li>)}
            </ul>
            <button onClick={decrementAppIndex}>Back</button>
            <button onClick={incrementAppIndex}>Start Game</button>
            <header>Board Setup</header>
            {numberOfPlayersOptions.map((number) => <RadioButtonWithKey onClick={onClickNumberOfPlayers} group="NumberOfPlayers" name={number + (number === 1 ? ' Player' : ' Players')} value={number} index={number} />)}
            <button onClick={getRandomBoards}>Randomize Boards</button>
            <div>
                {selectedBoards}
            </div>
        </div>
    )
}