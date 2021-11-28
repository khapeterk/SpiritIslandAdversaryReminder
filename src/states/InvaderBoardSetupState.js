import { boldText, Checkbox, Page } from '../Reusable';
import { getAdversary } from '../Utils';
import AdversarySetupState from './AdversarySetupState';
import IslandSetupState from './IslandSetupState';

function InvaderBoardSetupPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Island Setup', disabled: false, onClick: () => setState(IslandSetupState) };
  const rightButton = { label: 'Adversary Setup', disabled: false, onClick: () => setState(AdversarySetupState) };
  const adversary = getAdversary(settings.selectedAdversary);
  const fearDeckSetup = adversary.Level[settings.selectedLevel]['Fear Cards']
  return (
    <Page header={'Invader Board Setup'} leftButton={leftButton} rightButton={rightButton}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>{boldText('Island Setup')}</div>
        <Checkbox id='blight'>Build the Fear Deck by dealing Fear Cards into 3 piles of {fearDeckSetup.map((count) => count + ' Cards').join(', ')}.</Checkbox>
        <Checkbox id='blight'>Put the third pile on the Victory Level.</Checkbox>
        <Checkbox id='blight'>Put the Third Terror Level on top of the third pile.</Checkbox>
        <Checkbox id='blight'>Put the second pile on the Third Terror Level.</Checkbox>
        <Checkbox id='blight'>Put the Second Terror Level on top of the second pile.</Checkbox>
        <Checkbox id='blight'>Put the first pile on the Second Terror Level.</Checkbox>
        <Checkbox id='blight'>Build a pool of Fear Tokens at the top of the Invader Board (4 per player)</Checkbox>
        <Checkbox id='blight'>Place Blight Cards on the Blight Space and add Blight tokens (2 per player) </Checkbox>
        <Checkbox id='blight'>Add exactly one extra Blight Token to the Blight Cards</Checkbox>
        <Checkbox id='blight'>Build the Invader Deck on the Explore Space by ordering the Invader Cards by Stage (I, II, and III) and then randomly removing one Invader Card from each Stage. (The Adversary may change how Invader Deck is set up)</Checkbox>
      </div>
    </Page>
  )
}

const InvaderBoardSetupState = { page: InvaderBoardSetupPage }

export default InvaderBoardSetupState;