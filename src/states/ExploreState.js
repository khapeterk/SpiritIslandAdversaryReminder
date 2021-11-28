import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import BuildState from './BuildState';
import SlowPowersState from './SlowPowersState';

function ExplorePage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Build', disabled: false, onClick: () => setState(BuildState) };
  const rightButton = { label: 'Slow Powers', disabled: false, onClick: () => setState(SlowPowersState) };
  return (
    <Page header={'Explore'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="explore">Explore in each land matching the Ravage space on the Invader Board.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const ExploreState = { page: ExplorePage }

export default ExploreState;