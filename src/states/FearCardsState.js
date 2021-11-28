import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import { shouldHighImmigration } from '../Utils';
import EventCardState from './EventCardState';
import HighImmigrationState from './HighImmigrationState';
import RavageState from './RavageState';

function FearCardsPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Event Card', disabled: false, onClick: () => setState(EventCardState) };
  const rightButtonEnglandThree = { label: 'High Immigration', disabled: false, onClick: () => setState(HighImmigrationState) };
  const rightButtonStandard = { label: 'Ravage', disabled: false, onClick: () => setState(RavageState) };
  const rightButton = shouldHighImmigration(settings) ? rightButtonEnglandThree : rightButtonStandard;
  return (
    <Page header={'Fear Cards'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="playcards">
        If any Fear Cards have been earned, pick up all the cards and flip the stack over. Resolve Fear Cards in order without looking at the next one. Resolve only the section of the Fear Card matching the current Terror Level.
      </Checkbox>
      <ul style={{ margin: '0' }}>
        <li>If you happen to earn more Fear Cards while resolving Fear Cards, add the new card without looking at it to the bottom of the stack of Fear Cards you are resolving.</li>
      </ul>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const FearCardsState = { page: FearCardsPage }

export default FearCardsState;