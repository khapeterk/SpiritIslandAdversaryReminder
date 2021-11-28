import { useState } from 'react';
import PlayersBoardsState from './states/PlayersBoardsState';

function App() {
  const [settings, setSettings] = useState({
    selectedNumberOfPlayers: 1,
    selectedBoards: [],
    selectedSpirit: '',
    selectedAdversary: '',
    selectedLevel: 1
  });
  const [state, setState] = useState(PlayersBoardsState);
  return (
    <div style={{padding: '5px'}}>
      {state.page({ settings, setSettings, setState })}
    </div>
  );
}

export default App;