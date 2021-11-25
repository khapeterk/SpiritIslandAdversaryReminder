import { boldText, Checkbox, Page } from '../Reusable';
import { getAdversary } from '../Utils';
import AdversarySetupState from './AdversarySetupState';

function FirstGrowthPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Adversary Setup', disabled: false, onClick: () => setState(AdversarySetupState) };
  const rightButton = { label: 'Gain Energy', disabled: false, onClick: () => setState() };
  const adversary = getAdversary(settings.selectedAdversary);
  const gameplayChangeLevels = adversary.GameplayChangeLevels;
  const adversaryLevels = adversary.Level;
  const renderGameplayChangeLevels = () => {
    if (gameplayChangeLevels.length === 0) return <div>None</div>
    return (
      <ul>
        {gameplayChangeLevels.map((level) => adversaryLevels[level].GameplayChanges.map((changeText) => <li key={changeText}>{changeText}</li>))}
      </ul>
    )
  }
  return (
    <Page header={'Growth'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="growth">Choose one option (unless stated otherwise) next to "Growth" at the upper-right of the Spirit Panel. Each section is a single choice. You must do everything shown, but may choose the order.</Checkbox>
      <div>{boldText('Adversary Gameplay Changes')}</div>
      <div>{renderGameplayChangeLevels()}</div>
    </Page>
  )
}

const FirstGrowthState = { page: FirstGrowthPage }

export default FirstGrowthState;