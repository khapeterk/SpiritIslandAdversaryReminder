import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import FearCardsState from './FearCardsState';
import InvaderPhaseStartState from './InvaderPhaseStartState';

function EventCardPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Invader Phase', disabled: false, onClick: () => setState(InvaderPhaseStartState) };
  const rightButton = { label: 'Fear Cards', disabled: false, onClick: () => setState(FearCardsState) };
  return (
    <Page header={'Event Card'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="playcards">
        Draw a card from the Event Card and resolve it. On the first turn of the game, do not resolve the Event Card and discard it.
      </Checkbox>
      <ul style={{margin: '0'}}>
        <li>On an Event Card, There are 2-3 sections that resolve in order from top to bottom. If there are sections that reference Terror Level or Healthy/Blighted Island or Stages, only resolve the section that matches either the current Terror level, the Healthy/Blighted Island on the Blight Card, or the Invader Stage matching the top card of the Invader Deck. (Exception for Invader Brandenburg-Prussia Level 2+, the early Stage III card is considered Stage II)</li>
        <li>Some Event Cards have an Energy Cost aided by an element. All matching elements in play reduce the cost by 1. Any spirit may discard any number of Power Cards from hand to reduce cost by 2. Any spirit may forget any number of Power Cards from hand, play, or discard to reduce cost by 4. A Power Card only counts for one of these options.</li>
      </ul>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const EventCardState = { page: EventCardPage }

export default EventCardState;