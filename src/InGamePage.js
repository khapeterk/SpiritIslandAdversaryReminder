import data from './data';
import { useState } from 'react';

export default function InGamePage(props) {
    const { incrementAppIndex } = props;
    const phases = data.phases;
    const phaseNames = phases.map(phase => phase.name);
    const phaseContents = phases.map(phase => phase.content);
    const [currentIndex, setCurrentIndex] = useState(0);

    const incrementIndex = () => { setCurrentIndex(currentIndex === phaseNames.length - 1 ? 0 : currentIndex + 1) };
    const decrementIndex = () => { setCurrentIndex(currentIndex === 0 ? phaseNames.length - 1 : currentIndex - 1) };
    return (
        <div>
            <header>In Game</header>
            <Breadcrumbs decrementIndex={decrementIndex} phases={phaseNames} currentPhase={phaseNames[currentIndex]} incrementIndex={incrementIndex} />
            <div>
                {phaseContents[currentIndex]}
            </div>
            <button onClick={incrementAppIndex}>Reset</button>
        </div>
    )
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

function boldText(text) { return <b>{text}</b> }
function superscriptText(text) { return <sup>{text}</sup> }