import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import GainEnergyState from './GainEnergyState';
import TimePassesState from './TimePassesState';

function GrowthPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Time Passes', disabled: false, onClick: () => setState(TimePassesState) };
  const rightButton = { label: 'Gain Energy', disabled: false, onClick: () => setState(GainEnergyState) };
  return (
    <Page header={'Growth'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="growth">Choose one option (unless stated otherwise) next to "Growth" at the upper-right of the Spirit Panel. Each section is a single choice. You must do everything shown, but may choose the order.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const GrowthState = { page: GrowthPage }

export default GrowthState;