import { AdversaryGameplayChanges, Checkbox, Page } from '../Reusable';
import ExploreState from './ExploreState';
import TimePassesState from './TimePassesState';

function SlowPowersPage(props) {
  const { settings, setState } = props;
  const leftButton = { label: 'Explore', disabled: false, onClick: () => setState(ExploreState) };
  const rightButton = { label: 'Time Passes', disabled: false, onClick: () => setState(TimePassesState) };
  return (
    <Page header={'Slow Powers'} leftButton={leftButton} rightButton={rightButton}>
      <Checkbox id="slow">Players resolve Slow Innate Powers printed on their Spirit Panel and Slow Power Cards they played.</Checkbox>
      <AdversaryGameplayChanges settings={settings} />
    </Page>
  )
}

const SlowPowersState = { page: SlowPowersPage }

export default SlowPowersState;