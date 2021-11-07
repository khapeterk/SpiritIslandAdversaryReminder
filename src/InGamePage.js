import data from './data';
import { useRef, useState } from 'react';
import { bigBoldText, boldText } from './Reusable';
import { getSpiritSpecialRulePhases, getSpiritSpecialRules } from './Utils';

export default function InGamePage(props) {
    const { incrementAppIndex, currentAdversary, currentLevel, selectedNumberOfPlayers, selectedSpirit } = props;
    const phases = data.phases;
    const adversaries = data.adversaries;
    const phaseNames = phases.map(phase => phase.name);
    const phaseContents = phases.map(phase => phase.content);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();
    const previousIndex = () => currentIndex === 0 ? phaseNames.length - 1 : currentIndex - 1;
    const nextIndex = () => currentIndex === phaseNames.length - 1 ? 0 : currentIndex + 1;
    const incrementIndex = () => { setCurrentIndex(nextIndex()) };
    const decrementIndex = () => { setCurrentIndex(previousIndex()) };
    const renderSpecialRules = () => {
        const phasesToRender = getSpiritSpecialRulePhases(selectedSpirit);
        if (phasesToRender.includes(phaseNames[currentIndex]) || phasesToRender[0] === 'All') {
            return (
                <>
                <div>{boldText(selectedSpirit + " Special Rules")}</div>
                <div style={{padding: '0 20px'}}>{getSpiritSpecialRules(selectedSpirit)}</div>
                </>
            )
        }
    }
    return (
        <div ref={ref}>
            {bigBoldText(selectedNumberOfPlayers + ' Players VS ' + adversaries[currentAdversary].Name + ' Level: ' + currentLevel)}
            <Breadcrumbs decrementIndex={decrementIndex} phases={phaseNames} previousPhase={phaseNames[previousIndex()]} currentPhase={phaseNames[currentIndex]} nextPhase={phaseNames[nextIndex()]} incrementIndex={incrementIndex} />
            <div>
                {phaseContents[currentIndex]}
            </div>
            {renderSpecialRules()}
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
            {<div style={breadcrumbStyle}>{boldText(currentPhase)}</div>}
            <button onClick={incrementIndex}>{nextPhase}</button>
        </div>
    )
}