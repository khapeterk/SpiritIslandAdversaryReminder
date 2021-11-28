import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import AdversarySetupState from './AdversarySetupState';
import GainEnergyState from './GainEnergyState';

function FirstGrowthPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Adversary Setup', disabled: false, onClick: () => setState(AdversarySetupState) };
  const rightButton = { label: 'Gain Energy', disabled: false, onClick: () => setState(GainEnergyState) };
  return (
    <Page header={'Growth'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="growth">Choose one option (unless stated otherwise) next to "Growth" at the upper-right of the Spirit Panel. Each section is a single choice. You must do everything shown, but may choose the order.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const FirstGrowthState = { page: FirstGrowthPage }

export default FirstGrowthState;