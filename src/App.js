import { useState } from 'react';
import data from './data';
import HomePage from './HomePage';
import InGamePage from './InGamePage';
import SetupPage from './SetupPage';

function App() {
  const [currentLevel, setCurrentLevel] = useState("1");
  const [currentAdversary, setCurrentAdversary] = useState(0);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [selectedNumberOfPlayers, setSelectedNumberOfPlayers] = useState(1);
  const [selectedSpirit, setSelectedSpirit] = useState(data.spirits[0].Name);
  const countAppPages = 3;
  const incrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex + 1) };
  const decrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex - 1) };

  const renderPage = () => {
    if (currentAppIndex === 0) return <HomePage
      currentLevel={currentLevel}
      currentAdversary={currentAdversary}
      setCurrentLevel={setCurrentLevel}
      setCurrentAdversary={setCurrentAdversary}
      incrementAppIndex={incrementAppIndex}
      selectedSpirit={selectedSpirit}
      setSelectedSpirit={setSelectedSpirit} />
    if (currentAppIndex === 1) return <SetupPage
      incrementAppIndex={incrementAppIndex}
      decrementAppIndex={decrementAppIndex}
      currentAdversary={currentAdversary}
      currentLevel={currentLevel}
      selectedNumberOfPlayers={selectedNumberOfPlayers}
      setSelectedNumberOfPlayers={setSelectedNumberOfPlayers}
      selectedSpirit={selectedSpirit} />
    if (currentAppIndex === 2) return <InGamePage
      incrementAppIndex={incrementAppIndex}
      currentAdversary={currentAdversary}
      currentLevel={currentLevel}
      selectedNumberOfPlayers={selectedNumberOfPlayers}
      selectedSpirit={selectedSpirit} />
  }
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
