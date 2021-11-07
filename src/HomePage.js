import data from './data';
import { boldText, RadioButton, pageHeader } from './Reusable';
import { getSpiritComplexities, getSpiritNames, getSpiritPlayStyle } from './Utils';

export default function HomePage(props) {
    let { currentLevel, currentAdversary, setCurrentLevel, setCurrentAdversary, incrementAppIndex, selectedSpirit, setSelectedSpirit } = props;
    const onClickLevel = (e) => { setCurrentLevel(e.target.value) };
    const onClickAdversary = (e) => { setCurrentAdversary(parseInt(e.target.value)) };
    const onClickSpirit = (e) => { setSelectedSpirit(e.target.value) };
    const adversaries = data.adversaries;
    const adversaryNames = adversaries.map(adversary => adversary.Name);
    const spiritNames = getSpiritNames();
    const complexities = getSpiritComplexities();
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
    const renderSpiritsRadioButtons = () => {
        return spiritNames.map((name, index) =>
            <RadioButton
                onClick={onClickSpirit}
                group="spirit"
                value={name}
                name={name}
                currentValue={selectedSpirit}
                key={index} />)
    }
    return (
        <div>
            {pageHeader("Spirit Island Game Reminders")}
            <div>{boldText("Select an Adversary")}</div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px'}}>
                {renderAdversariesRadioButtons()}
            </div>
            <div>
                <div>{boldText("Select a difficulty level")}</div>
                <table style={{padding: '0 20px'}}>
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
            </div>
            <div>
                <div>
                    <div>{boldText("Select a Spirit")}</div>
                    <div style={{padding: '0 20px'}}>
                        <div>
                            By Complexity:
                            {complexities.map((complexity) => <RadioButton group="complexity" name={complexity} />)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {renderSpiritsRadioButtons()}
                        </div>
                    </div>
                </div>
                <div>
                    <div>{boldText("Selected Spirit's Play Style")}</div>
                    <div style={{padding: '0 20px'}}>{getSpiritPlayStyle(selectedSpirit)}</div>
                </div>
            </div>
            <button onClick={incrementAppIndex}>Setup</button>
        </div>
    )
}
