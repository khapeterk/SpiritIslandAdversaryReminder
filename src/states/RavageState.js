import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import { shouldHighImmigration } from '../Utils';
import BuildState from './BuildState';
import FearCardsState from './FearCardsState';
import HighImmigrationState from './HighImmigrationState';

function RavagePage(props) {
  const { settings, setState } = props;
  const leftButtonEnglandThree = { label: 'High Immigration', disabled: false, onClick: () => setState(HighImmigrationState) }
  const leftButtonStandard = { label: 'Fear Cards', disabled: false, onClick: () => setState(FearCardsState) }
  const leftButton = shouldHighImmigration(settings) ? leftButtonEnglandThree : leftButtonStandard;
  const rightButton = { label: 'Build', disabled: false, onClick: () => setState(BuildState) };
  return (
    <Page header={'Ravage'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="Ravage">Ravage in each land matching the Ravage space on the Invader Board.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const RavageState = { page: RavagePage }

export default RavageState;