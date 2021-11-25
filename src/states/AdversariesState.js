import data from "../data";
import { Page, RadioButton } from "../Reusable";
import { getRandomIndex } from "../Utils";
import LevelsState from "./LevelsState";
import PlayersBoardsState from "./PlayersBoardsState";

function AdversariesPage(props) {
  const { settings, setSettings, setState } = props;
  const adversaryNames = data.adversaries.map(adversary => adversary.ShortName);
  const leftButton = { label: 'Select Players and Boards', disabled: false, onClick: () => setState(PlayersBoardsState) };
  const rightButton = { label: 'Select Level', disabled: !adversaryNames.includes(settings.selectedAdversary), onClick: () => setState(LevelsState) };
  const onClickAdversary = (event) => {
    setSettings(Object.assign({}, settings, { selectedAdversary: event.target.value }))
  }
  const selectRandomAdversary = () => {
    setSettings(Object.assign({}, settings, { selectedAdversary: adversaryNames[getRandomIndex(adversaryNames)] }))
  }
  return (
    <Page header={'Select Adversary'} leftButton={leftButton} rightButton={rightButton}>
      <input type="checkbox" id="random" onClick={selectRandomAdversary} /><label htmlFor="random">Randomly Select?</label>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AdversariesRadioButtons selectedAdversary={settings.selectedAdversary} onClickAdversary={onClickAdversary} adversaryNames={adversaryNames} />
      </div>
    </Page>
  )
}

function AdversariesRadioButtons(props) {
  const { onClickAdversary, selectedAdversary, adversaryNames } = props;
  return adversaryNames.map((adversary, index) =>
    <RadioButton
      onClick={onClickAdversary}
      group="adversary"
      value={adversary}
      name={adversary}
      currentValue={selectedAdversary}
      key={index} />
  )
}

const AdversariesState = { page: AdversariesPage }

export default AdversariesState;