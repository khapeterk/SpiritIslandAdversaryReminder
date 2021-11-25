import { boldText, Page } from '../Reusable';
import { getAdversariesMap } from '../Utils';
import AdversariesState from './AdversariesState';
import SpiritsState from './SpiritsState';

function LevelsPage(props) {
  const { settings, setSettings, setState } = props;
  const levels = [1, 2, 3, 4, 5, 6]
  const leftButton = { label: 'Select Adversary', disabled: false, onClick: () => setState(AdversariesState) };
  const rightButton = { label: 'Select Spirit', disabled: false, onClick: () => setState(SpiritsState) };
  return (
    <Page header={'Select Level'} leftButton={leftButton} rightButton={rightButton}>
      <div>
        {levels.map((level) => {
          const setLevel = () => {
            setSettings(Object.assign({}, settings, { selectedLevel: level }))
          }
          return (
            <div onClick={setLevel} key={level} style={{ color: level <= settings.selectedLevel ? 'black' : 'lightgray' }}>
              <div>
                {boldText('Level ' + level + ': ' + getAdversariesMap()[settings.selectedAdversary].Level[level]['Name'])}
              </div>
              <div>
                {getAdversariesMap()[settings.selectedAdversary].Level[level]['Game Effects']}
              </div>
            </div>
          )
        }
        )}
      </div>
    </Page>
  )
}

const LevelsState = { page: LevelsPage }

export default LevelsState;