import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import EventCardState from './EventCardState';
import FastPowersState from './FastPowersState';

function InvaderPhaseStartPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Fast Powers', disabled: false, onClick: () => setState(FastPowersState) };
  const rightButton = { label: 'Event Card', disabled: false, onClick: () => setState(EventCardState) };
  return (
    <Page header={'Invader Phase'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="blight">
        If the island is Blighted, Blight cards that have "each Invader Phase" effects resolve now. This includes the four Blighted Island cards below:
        <ul>
          <li>Downward Spiral</li>
          <li>Memory Fades To Dust</li>
          <li>Power Corrodes The Spirit</li>
          <li>Untended Land Crumbles</li>
        </ul>
      </Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const InvaderPhaseStartState = { page: InvaderPhaseStartPage }

export default InvaderPhaseStartState;