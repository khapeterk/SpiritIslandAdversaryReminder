import { Page, RadioButton } from "../Reusable";
import { removeMultipleRandomFromArray, singlePluralWord } from "../Utils";
import AdversariesState from "./AdversariesState";

function PlayersBoardsPage(props) {
  const { settings, setSettings, setState } = props;
  const leftButton = { label: 'Home Page', disabled: true, onClick: () => { } };
  const rightButton = { label: 'Select Adversary', disabled: false, onClick: () => setState(AdversariesState) };
  const numberOfPlayersOptions = [1, 2, 3, 4, 5, 6];
  const onClickNumberOfPlayers = (event) => {
    setSettings(Object.assign({}, settings, { selectedNumberOfPlayers: parseInt(event.target.value) }));
  }
  return (
    <Page header='Select Players and Boards' leftButton={leftButton} rightButton={rightButton}>
      Select Number of Players
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {numberOfPlayersOptions.map((number) =>
          <NumberOfPlayersRadioButton
            number={number}
            currentValue={settings.selectedNumberOfPlayers}
            onClick={onClickNumberOfPlayers}
            key={number} />)
        }
      </div>
      <RandomBoards settings={settings} setSettings={setSettings} />
    </Page>
  )
}

function RandomBoards(props) {
  const { settings, setSettings } = props
  const boardsOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
  const getRandomBoards = () => { setSettings(Object.assign({}, settings, { selectedBoards: removeMultipleRandomFromArray(boardsOptions, settings.selectedNumberOfPlayers) })) }
  return (
    <>
      <button onClick={getRandomBoards}>Randomize Boards</button>
      <div style={{ padding: '0 10px' }}>
        {settings.selectedNumberOfPlayers === 6 ? 'All Boards' : settings.selectedBoards.join(', ')}
      </div>
    </>
  )
}

function NumberOfPlayersRadioButton(props) {
  const { number, currentValue, onClick } = props;
  return (
    <RadioButton
      onClick={onClick}
      group='NumberOfPlayers'
      name={number + ' ' + singlePluralWord('Player', number)}
      value={number}
      key={number}
      currentValue={currentValue} />
  );
}

const PlayersBoardsState = { page: PlayersBoardsPage }

export default PlayersBoardsState;