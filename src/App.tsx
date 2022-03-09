import GameBoard from "./components/GameBoard";
import HeaderScore from "./components/HeaderScore";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-green-900">
      <HeaderScore />
      <GameBoard />
    </div>
  );
}

export default App;
