import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import ExploreState from './ExploreState';
import RavageState from './RavageState';

function BuildPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Ravage', disabled: false, onClick: () => setState(RavageState) };
  const rightButton = { label: 'Explore', disabled: false, onClick: () => setState(ExploreState) };
  return (
    <Page header={'Build'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="build">Build in each land matching the Ravage space on the Invader Board.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const BuildState = { page: BuildPage }

export default BuildState;