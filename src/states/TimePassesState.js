import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import GrowthState from './GrowthState';
import SlowPowersState from './SlowPowersState';

function TimePassesPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Slow Powers', disabled: false, onClick: () => setState(SlowPowersState) };
  const rightButton = { label: 'Growth', disabled: false, onClick: () => setState(GrowthState) };
  return (
    <Page header={'Time Passes (End of Turn)'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="timepasses">Discard all Power Cards played this turn into your personal discard pile.</Checkbox>
      <Checkbox id="timepasses">All damage remaining at the end of turn is healed.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const TimePassesState = { page: TimePassesPage }

export default TimePassesState;