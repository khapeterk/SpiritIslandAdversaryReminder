import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import FirstGrowthState from './FirstGrowthState';
import PlayCardsState from './PlayCardsState';

function GainEnergyPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Growth', disabled: false, onClick: () => setState(FirstGrowthState) };
  const rightButton = { label: 'Play Cards', disabled: false, onClick: () => setState(PlayCardsState) };
  return (
    <Page header={'Gain Energy'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="gainenergy">Gain an amount of Energy equal to the highest uncovered number on your Energy Presence Track. Place any gained Energy on or near your Spirit Panel</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const GainEnergyState = { page: GainEnergyPage }

export default GainEnergyState;