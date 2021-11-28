import { boldText, Checkbox, Page } from '../Reusable';
import { getAdversary } from '../Utils';
import FirstGrowthState from './FirstGrowthState';
import InvaderBoardSetupState from './InvaderBoardSetupState';

function AdversarySetupPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Invader Board Setup', disabled: false, onClick: () => setState(InvaderBoardSetupState) };
  const rightButton = { label: 'Game Start', disabled: false, onClick: () => setState(FirstGrowthState) };
  const adversary = getAdversary(settings.selectedAdversary);
  const adversarySetup = adversary.SetupChangeLevels;
  const renderAdversarySetup = () => {
    const checkboxComponents = adversarySetup.map((level) => {
      if (level > settings.selectedLevel) return null;
      if (settings.selectedAdversary === "BRANDENBURG-PRUSSIA" && level !== 1 && level !== settings.selectedLevel) return null;
      return <Checkbox id={level} key={level}>{adversary.Level[level]['Game Effects']}</Checkbox>
    })
    if (checkboxComponents.length === 0) return (<div>No Setup Changes</div>)
    return checkboxComponents;
  }
  return (
    <Page header={'Adversary Setup'} leftButton={leftButton} rightButton={rightButton}>
      {boldText(`${settings.selectedAdversary} Level ${settings.selectedLevel}`)}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {renderAdversarySetup()}
      </div>
    </Page>
  )
}

const AdversarySetupState = { page: AdversarySetupPage }

export default AdversarySetupState;