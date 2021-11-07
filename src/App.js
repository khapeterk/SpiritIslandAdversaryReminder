import { useState } from 'react';
import HomePage from './HomePage';
import InGamePage from './InGamePage';
import SetupPage from './SetupPage';

function App() {
  const [currentLevel, setCurrentLevel] = useState("1");
  const [currentAdversary, setCurrentAdversary] = useState(0);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [selectedNumberOfPlayers, setSelectedNumberOfPlayers] = useState(1);
  const countAppPages = 3;
  const incrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex + 1) };
  const decrementAppIndex = () => { setCurrentAppIndex(currentAppIndex === countAppPages - 1 ? 0 : currentAppIndex - 1) };

  const renderPage = () => {
    if (currentAppIndex === 0) return <HomePage
      currentLevel={currentLevel}
      currentAdversary={currentAdversary}
      setCurrentLevel={setCurrentLevel}
      setCurrentAdversary={setCurrentAdversary}
      incrementAppIndex={incrementAppIndex} />
    if (currentAppIndex === 1) return <SetupPage
      incrementAppIndex={incrementAppIndex}
      decrementAppIndex={decrementAppIndex}
      currentAdversary={currentAdversary}
      currentLevel={currentLevel}
      selectedNumberOfPlayers={selectedNumberOfPlayers}
      setSelectedNumberOfPlayers={setSelectedNumberOfPlayers} />
    if (currentAppIndex === 2) return <InGamePage
      incrementAppIndex={incrementAppIndex}
      currentAdversary={currentAdversary}
      currentLevel={currentLevel}
      selectedNumberOfPlayers={selectedNumberOfPlayers} />
  }
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
