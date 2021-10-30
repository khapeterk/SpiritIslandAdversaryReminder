import { useState } from 'react';
import data from './data';
import { RadioButton } from './Reusable';

export default function HomePage(props) {
    const [adversaryMode, setAdversaryMode] = useState('select');
    let { currentLevel, currentAdversary, setCurrentLevel, setCurrentAdversary, incrementAppIndex } = props;
    const onClickLevel = (e) => { setCurrentLevel(e.target.value) };
    const onClickAdversary = (e) => { setCurrentAdversary(parseInt(e.target.value)) };
    const adversaries = data.adversaries;
    const adversaryNames = adversaries.map(adversary => adversary.name);
    const selectAdversary = () => { setAdversaryMode('select'); }
    const renderAdversariesRadioButtons = () => {
        return adversaryNames.map((adversary, index) =>
            <RadioButton
                onClick={onClickAdversary}
                group="adversary"
                value={index}
                name={adversary}
                currentValue={currentAdversary}
                key={index} />
        )
    }
    return (
        <div>
            <header>Spirit Island Game Reminders</header>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <button disabled={adversaryMode === 'select'} onClick={selectAdversary}>Select Adversary</button>
                </div>
                {renderAdversariesRadioButtons()}
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Level</th>
                        <th>Game Effects (cumulative)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="1" currentValue={currentLevel} /></td>
                        <td>1</td>
                        <td>{adversaries[currentAdversary].Level["1"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="2" currentValue={currentLevel} /></td>
                        <td>2</td>
                        <td>{adversaries[currentAdversary].Level["2"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="3" currentValue={currentLevel} /></td>
                        <td>3</td>
                        <td>{adversaries[currentAdversary].Level["3"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="4" currentValue={currentLevel} /></td>
                        <td>4</td>
                        <td>{adversaries[currentAdversary].Level["4"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="5" currentValue={currentLevel} /></td>
                        <td>5</td>
                        <td>{adversaries[currentAdversary].Level["5"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="6" currentValue={currentLevel} /></td>
                        <td>6</td>
                        <td>{adversaries[currentAdversary].Level["6"]["Game Effects"]}</td>
                    </tr>

                </tbody>
            </table>
            <button onClick={incrementAppIndex}>Setup</button>
        </div>
    )
}
