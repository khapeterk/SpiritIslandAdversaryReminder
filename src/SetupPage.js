import { useState } from 'react';
import { RadioButton } from './Reusable';
import data from './data';
import { removeMultipleRandomFromArray } from './Utils';

export default function SetupPage(props) {
    const { incrementAppIndex, decrementAppIndex, currentAdversary, currentLevel, selectedNumberOfPlayers, setSelectedNumberOfPlayers} = props;
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
    adversarySetup["THE KINGDOM OF BRANDENBURG-PRUSSIA"].push(currentLevel);
    const displayLevels = adversarySetup[adversaries[currentAdversary].name].filter(level => level <= currentLevel);
    const numberOfPlayersOptions = [1, 2, 3, 4, 5, 6];
    const boardsOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
    const [selectedBoards, setSelectedBoards] = useState([]);
    const getRandomBoards = () => { setSelectedBoards(removeMultipleRandomFromArray(boardsOptions, selectedNumberOfPlayers)) }
    const onClickNumberOfPlayers = (event) => { setSelectedNumberOfPlayers(parseInt(event.target.value)); }
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
            <div>
                <span style={{display:'flex' }}>
                    <span style={{textAlign:'right'}}>
                    <div>
                        {numberOfPlayersOptions.map((number) => <RadioButton onClick={onClickNumberOfPlayers} group="NumberOfPlayers" name={number + (number === 1 ? ' Player' : ' Players')} value={number} key={number} currentValue={selectedNumberOfPlayers} />)}
                    </div>
                    <div>
                        <button onClick={getRandomBoards} disabled={selectedNumberOfPlayers === 6}>Randomize Boards</button>
                    </div>
                    </span>
                    <span style={{flexGrow:1}}></span>
                </span>

            </div>
            <div>
                {selectedNumberOfPlayers === 6 ? 'All Boards' : selectedBoards.join(', ')}
            </div>
        </div>
    )
}