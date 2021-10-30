import data from './data';
import { useRef, useState } from 'react';

export default function InGamePage(props) {
    const { incrementAppIndex } = props;
    const phases = data.phases;
    const phaseNames = phases.map(phase => phase.name);
    const phaseContents = phases.map(phase => phase.content);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();
    const previousIndex = () => currentIndex === 0 ? phaseNames.length - 1 : currentIndex - 1;
    const nextIndex = () => currentIndex === phaseNames.length - 1 ? 0 : currentIndex + 1;
    const incrementIndex = () => { setCurrentIndex(nextIndex()) };
    const decrementIndex = () => { setCurrentIndex(previousIndex()) };
    return (
        <div ref={ref}>
            <header>In Game</header>
            <Breadcrumbs decrementIndex={decrementIndex} phases={phaseNames} previousPhase={phaseNames[previousIndex()]} currentPhase={phaseNames[currentIndex]} nextPhase={phaseNames[nextIndex()]} incrementIndex={incrementIndex} />
            <div>
                {phaseContents[currentIndex]}
            </div>
            <button onClick={incrementAppIndex}>Reset</button>
        </div>
    )
}

function Breadcrumbs(props) {
    const { decrementIndex, previousPhase, currentPhase, nextPhase, incrementIndex } = props;
    const breadcrumbsStyle = { display: 'flex', justifyContent: 'center' }
    const breadcrumbStyle = { padding: '0 5px' }
    return (
        <div style={breadcrumbsStyle}>
            <button onClick={decrementIndex}>{previousPhase}</button>
            {/* {phaseNames.map((phase, index) => <div style={breadcrumbStyle} key={index}>{currentPhase === phase ? boldText(phase) : superscriptText(phase)}</div>)} */}
            {<div style={breadcrumbStyle}>{boldText(currentPhase)}</div>}
            <button onClick={incrementIndex}>{nextPhase}</button>
        </div>
    )
}

function boldText(text) { return <b>{text}</b> }