import { useState } from 'react';
import { boldText, pageHeader, RadioButton } from './Reusable';
import data from './data';
import { getSpiritSetup, removeMultipleRandomFromArray } from './Utils';

export default function SetupPage(props) {
    const {
        incrementAppIndex,
        decrementAppIndex,
        currentAdversary,
        currentLevel,
        selectedNumberOfPlayers,
        setSelectedNumberOfPlayers,
        selectedSpirit } = props;
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
    const displayLevels = adversarySetup[adversaries[currentAdversary].Name].filter(level => level <= currentLevel);
    const numberOfPlayersOptions = [1, 2, 3, 4, 5, 6];
    const boardsOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
    const [selectedBoards, setSelectedBoards] = useState([]);
    const getRandomBoards = () => { setSelectedBoards(removeMultipleRandomFromArray(boardsOptions, selectedNumberOfPlayers)) }
    const onClickNumberOfPlayers = (event) => { setSelectedNumberOfPlayers(parseInt(event.target.value)); }
    return (
        <div>
            {pageHeader("Setup")}
            {boldText("Selected Game Settings")}
            <div style={{ padding: '0 20px' }}>
                <div>Adversary Name: {adversaries[currentAdversary].Name} </div>
                <div>Current Level: {currentLevel} </div>
            </div>
            <div>
                {boldText("Board Setup")}
                <div>
                    <div style={{ padding: '0 20px' }}>On each board...</div>
                    <ul style={{marginTop: '0'}}>
                        <li>Put Disease in Land #2</li>
                        <li>Put Beast in lowest numbered land without setup symbol</li>
                        {displayLevels.map((level, index) => <li key={index}>{adversaries[currentAdversary].Level[level]["Game Effects"]}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                {boldText("Board Setup")}
                <div style={{ padding: '0 20px' }}>
                    <span style={{ display: 'flex' }}>
                        <span>
                            <div>
                                {numberOfPlayersOptions.map((number) => <RadioButton onClick={onClickNumberOfPlayers} group="NumberOfPlayers" name={number + (number === 1 ? ' Player' : ' Players')} value={number} key={number} currentValue={selectedNumberOfPlayers} />)}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <button onClick={getRandomBoards} disabled={selectedNumberOfPlayers === 6}>Randomize Boards</button>
                            </div>
                        </span>
                        <span style={{ flexGrow: 1 }}></span>
                    </span>

                </div>
                <div>
                    {selectedNumberOfPlayers === 6 ? 'All Boards' : selectedBoards.join(', ')}
                </div>
            </div>
            <div>
                <div>{boldText("Setup for " + selectedSpirit)}</div>
                <div style={{ padding: '0 20px' }}>{getSpiritSetup(selectedSpirit)}</div>
            </div>
            <button onClick={decrementAppIndex}>Back</button>
            <button onClick={incrementAppIndex}>Start Game</button>
        </div>
    )
}