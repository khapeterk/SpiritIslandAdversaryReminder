import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import FearCardsState from './FearCardsState';
import RavageState from './RavageState';

function HighImmigrationPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Fear Cards', disabled: false, onClick: () => setState(FearCardsState) };
  const rightButton = { label: 'Ravage', disabled: false, onClick: () => setState(RavageState) };
  return (
    <Page header={'High Immigration Build'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="build">Before Ravaging, perform a Build action matching lands on the High Immigration tile.</Checkbox>
      {settings.selectedLevel === 3 ? <Checkbox id="remove">Remove the High Immigration tile when a Stage II card slides onto it.</Checkbox> : null}
      {settings.selectedLevel === 6 ? <Checkbox id="remove">During any Invader phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot).</Checkbox> : null}
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const HighImmigrationState = { page: HighImmigrationPage }

export default HighImmigrationState;