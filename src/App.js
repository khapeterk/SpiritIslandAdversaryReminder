import { useState } from 'react';
import data from './data';

function App() {
  const phases = data.phases;
  const adversaries = data.adversaries;
  const phaseNames = phases.map(phase => phase.name);
  const phaseContents = phases.map(phase => phase.content);
  const adversaryNames = adversaries.map(adversary => adversary.name);
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => { setCurrentIndex(currentIndex === phaseNames.length - 1 ? 0 : currentIndex + 1) }
  const decrementIndex = () => { setCurrentIndex(currentIndex === 0 ? phaseNames.length - 1 : currentIndex - 1) }
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const countAppPages = 3;
  const incrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex + 1) }
  const renderPage = () => {
    if (currentAppIndex === 0) return (
      <div>
        <header>Spirit Island Game Reminders</header>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {adversaryNames.map((adversary) => <RadioButton group="adversary" value={adversary} />)}
        </div>
        <button onClick={incrementAppIndex}>Setup</button>
      </div>)
    if (currentAppIndex === 1) return (<div>
      <header>Setup</header>
      <ul>
        <li>Put Disease in Land #2</li>
        <li>Put Beast in lowest numbered land without setup symbol</li>
      </ul>
      <button onClick={incrementAppIndex}>Start Game</button>
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

function RadioButton(props) {
  const { group, value } = props;
  return (
    <div>
      <input type="radio" id={value} name={group} value={value} />
      <label for={value}>{value}</label>
    </div>
  )
}

function boldText(text) { return <b>{text}</b> }
function superscriptText(text) { return <sup>{text}</sup> }

export default App;
