import data from './data';
import { RadioButton, RadioButtonWithKey } from './Reusable';

export default function HomePage(props) {
    let { currentAdversary, setCurrentLevel, setCurrentAdversary, incrementAppIndex } = props;
    const onClickLevel = (e) => { setCurrentLevel(e.target.value) };
    const onClickAdversary = (e) => { setCurrentAdversary(e.target.value) };
    const adversaries = data.adversaries;
    const adversaryNames = adversaries.map(adversary => adversary.name);
    return (
        <div>
            <header>Spirit Island Game Reminders</header>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {adversaryNames.map((adversary, index) => <RadioButtonWithKey onClick={onClickAdversary} group="adversary" value={index} name={adversary} index={index} />)}
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
                        <td><RadioButton onClick={onClickLevel} group="level" value="1" /></td>
                        <td>1</td>
                        <td>{adversaries[currentAdversary].Level["1"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="2" /></td>
                        <td>2</td>
                        <td>{adversaries[currentAdversary].Level["2"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="3" /></td>
                        <td>3</td>
                        <td>{adversaries[currentAdversary].Level["3"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="4" /></td>
                        <td>4</td>
                        <td>{adversaries[currentAdversary].Level["4"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="5" /></td>
                        <td>5</td>
                        <td>{adversaries[currentAdversary].Level["5"]["Game Effects"]}</td>
                    </tr>
                    <tr>
                        <td><RadioButton onClick={onClickLevel} group="level" value="6" /></td>
                        <td>6</td>
                        <td>{adversaries[currentAdversary].Level["6"]["Game Effects"]}</td>
                    </tr>

                </tbody>
            </table>
            <button onClick={incrementAppIndex}>Setup</button>
        </div>
    )
}