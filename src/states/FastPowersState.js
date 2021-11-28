import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import InvaderPhaseStartState from './InvaderPhaseStartState';
import PlayCardsState from './PlayCardsState';

function FastPowersPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Play Cards', disabled: false, onClick: () => setState(PlayCardsState) };
  const rightButton = { label: 'Invader Phase', disabled: false, onClick: () => setState(InvaderPhaseStartState) };
  return (
    <Page header={'Fast Powers'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="fast">Players resolve Fast Innate Powers printed on their Spirit Panel and Fast Power Cards they played.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const FastPowersState = { page: FastPowersPage }

export default FastPowersState;