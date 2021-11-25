import { Page, RadioButton } from "../Reusable";
import { getSpiritNamesForComplexity } from "../Utils";
import LevelsState from "./LevelsState";
import IslandSetupState from "./IslandSetupState";

function SpiritsPage(props) {
  const { settings, setSettings, setState } = props;
  const leftButton = { label: 'Select Level', disabled: false, onClick: () => setState(LevelsState) };
  const rightButton = { label: 'Island Setup', disabled: !getSpiritNamesForComplexity('All').includes(settings.selectedSpirit), onClick: () => setState(IslandSetupState) };
  const onClickSpirit = (event) => {
    setSettings(Object.assign({}, settings, { selectedSpirit: event.target.value }))
  }
  return (
    <Page header={'Select Spirit'} leftButton={leftButton} rightButton={rightButton}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SpiritsRadioButtons selectedSpirit={settings.selectedSpirit} onClickSpirit={onClickSpirit} />
      </div>
    </Page>
  )
}

function SpiritsRadioButtons(props) {
  const { selectedSpirit, onClickSpirit } = props;
  return getSpiritNamesForComplexity('All').map((name, index) =>
    <div key={index}>
      <RadioButton
        onClick={onClickSpirit}
        group="spirit"
        value={name}
        name={name}
        currentValue={selectedSpirit}
      />
    </div>
  )
}

const SpiritsState = { page: SpiritsPage }

export default SpiritsState;