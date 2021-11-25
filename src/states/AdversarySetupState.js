import { boldText, Checkbox, Page } from '../Reusable';
import { getAdversariesMap } from '../Utils';
import FirstGrowthState from './GrowthState';
import IslandSetupState from './IslandSetupState';

function AdversarySetupPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Select Level', disabled: false, onClick: () => setState(IslandSetupState) };
  const rightButton = { label: 'Game Start', disabled: false, onClick: () => setState(FirstGrowthState) };
  const adversary = getAdversariesMap()[settings.selectedAdversary];
  const adversarySetup = adversary.SetupChangeLevels;
  const renderAdversarySetup = () => {
    const checkboxComponents = adversarySetup.map((level) => {
      if (level > settings.selectedLevel) return null;
      if (settings.selectedAdversary === "THE KINGDOM OF BRANDENBURG-PRUSSIA" && level !== 1 && level !== settings.selectedLevel) return null;
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