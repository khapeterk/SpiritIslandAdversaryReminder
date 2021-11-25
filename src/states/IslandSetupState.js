import { boldText, Checkbox, Page } from '../Reusable';
import { getSpiritSetup } from '../Utils';
import AdversarySetupState from './AdversarySetupState';
import SpiritsState from './SpiritsState';

function IslandSetupPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Select Spirit', disabled: false, onClick: () => setState(SpiritsState) };
  const rightButton = { label: 'Adversary Setup', disabled: false, onClick: () => setState(AdversarySetupState) };
  const spiritSetup = getSpiritSetup(settings.selectedSpirit)
  return (
    <Page header={'Island Setup'} leftButton={leftButton} rightButton={rightButton}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>{boldText('Island Setup')}</div>
        <Checkbox id='beast'>Put a BEAST in the lowest-numbered land with no printed Setup icons</Checkbox>
        <Checkbox id='disease'>Put a DISEASE in land #2</Checkbox>
        <div>{boldText('Spirit Setup: ')}{settings.selectedSpirit}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Checkbox id='spirit'>{spiritSetup}</Checkbox>
        </div>
      </div>
    </Page>
  )
}

const IslandSetupState = { page: IslandSetupPage }

export default IslandSetupState;