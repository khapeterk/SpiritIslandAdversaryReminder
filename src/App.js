import { useState } from 'react';
import PlayersBoardsState from './states/PlayersBoardsState';

function App() {
  const [settings, setSettings] = useState({
    selectedNumberOfPlayers: null,
    selectedBoards: [],
    selectedSpirit: '',
    selectedAdversary: '',
    selectedLevel: '1'
  });
  const [state, setState] = useState(PlayersBoardsState);
  return (
    <div>
      {state.page({ settings, setSettings, setState })}
    </div>
  );
}

export default App;