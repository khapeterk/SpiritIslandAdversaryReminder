import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import FastPowersState from './FastPowersState';
import GainEnergyState from './GainEnergyState';

function PlayCardsPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Gain Energy', disabled: false, onClick: () => setState(GainEnergyState) };
  const rightButton = { label: 'Fast Powers', disabled: false, onClick: () => setState(FastPowersState) };
  return (
    <Page header={'Play Cards'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="playcards">Select the Power Cards (Fast and Slow) that you will use this turn. The maximum number of Power Cards you can play each turn is the highest uncovered number on the Card Plays Presence Track (even if you have enough Energy to pay for more). Do not resolve the effects of the Power Cards yet.</Checkbox>
      <Checkbox id="payenergy">You must immediately pay Energy for all Power Cards played, even Slow ones.</Checkbox>
      <Checkbox id="gainelements">Likewise, you immediately gain all Elements from played Power Cards, even if the Power's effects are Slow.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const PlayCardsState = { page: PlayCardsPage }

export default PlayCardsState;