import { useState } from 'react';
import data from './data';

function App() {
  const phases = data.phases;
  const adversaries = data.adversaries;
  const phaseNames = phases.map(phase => phase.name);
  const phaseContents = phases.map(phase => phase.content);
  const adversaryNames = adversaries.map(adversary => adversary.name);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentAdversary, setCurrentAdversary] = useState(0);
  const incrementIndex = () => { setCurrentIndex(currentIndex === phaseNames.length - 1 ? 0 : currentIndex + 1) };
  const decrementIndex = () => { setCurrentIndex(currentIndex === 0 ? phaseNames.length - 1 : currentIndex - 1) };
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const countAppPages = 3;
  const incrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex + 1) };
  const decrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex - 1) };
  const onClickLevel = (e) => { setCurrentLevel(e.target.value) };
  const onClickAdversary = (e) => { setCurrentAdversary(e.target.value) };
  const adversarySetup = {
    "THE TSARDOM OF RUSSIA": [1, 4, 5],
    "THE KINGDOM OF ENGLAND": [2, 3, 4, 6],
    "THE KINGDOM OF SWEDEN": [2, 4, 6],
    "THE HAPSBURG MONARCHY (LIVESTOCK COLONY)": [2, 3, 5],
    "THE KINGDOM OF SCOTLAND": [1, 2, 4],
    "THE KINGDOM OF FRANCE (PLANTATION COLONY)": [1, 2, 3],
    "THE KINGDOM OF BRANDENBURG-PRUSSIA": [1],
  }

  if (adversaries[currentAdversary].name == "THE KINGDOM OF BRANDENBURG-PRUSSIA" && currentLevel > 1) {
    adversarySetup[adversaries[currentAdversary].name].push(currentLevel)
  }

  const displayLevels = adversarySetup[adversaries[currentAdversary].name].filter(level => level <= currentLevel)
  const renderPage = () => {
    if (currentAppIndex === 0) return (
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
      </div>)
    if (currentAppIndex === 1) return (<div>
      <header>Setup</header>
      <div>Adversary Name: {adversaries[currentAdversary].name} </div>
      <div>Current Level: {currentLevel} </div>
      <ul>
        <li>Put Disease in Land #2</li>
        <li>Put Beast in lowest numbered land without setup symbol</li>
        {displayLevels.map((level, index) => <li key={index}>{adversaries[currentAdversary].Level[level]["Game Effects"]}</li>)}
      </ul>
      <button onClick={incrementAppIndex}>Start Game</button>
      <button onClick={decrementAppIndex}>Back</button>
    </div>)
    if (currentAppIndex === 2) return (
      <div>
        <header>In Game</header>
        <Breadcrumbs decrementIndex={decrementIndex} phases={phaseNames} currentPhase={phaseNames[currentIndex]} incrementIndex={incrementIndex} />
        <div>
          {phaseContents[currentIndex]}
        </div>
        <button onClick={incrementAppIndex}>Reset</button>
      </div>)
  }
  return (
    <div>
      {renderPage()}
    </div>
  );
}

function Breadcrumbs(props) {
  const { decrementIndex, phases: phaseNames, currentPhase, incrementIndex } = props;
  const breadcrumbsStyle = { display: 'flex', justifyContent: 'center' }
  const breadcrumbStyle = { padding: '0 5px' }
  return (
    <div style={breadcrumbsStyle}>
      <button onClick={decrementIndex}>prev</button>
      {phaseNames.map((phase, index) => <div style={breadcrumbStyle} key={index}>{currentPhase === phase ? boldText(phase) : superscriptText(phase)}</div>)}
      <button onClick={incrementIndex}>next</button>
    </div>
  )
}

function RadioButtonWithKey(props) {
  const { group, name, value, index } = props;
  return (
    <div key={index}>
      <input type="radio" id={name} name={group} value={value} onClick={props.onClick} />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

function RadioButton(props) {
  const { group, name, value } = props;
  return (
    <div>
      <input type="radio" id={name} name={group} value={value} onClick={props.onClick} />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

function boldText(text) { return <b>{text}</b> }
function superscriptText(text) { return <sup>{text}</sup> }

export default App;
