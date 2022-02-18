import './App.css';
import Pokemon from './components/pokemon';
import data from './data';

function App() {
  const bixinhos = data.map(bixu => <Pokemon poke={bixu}/>);
  return (
    <div className="App">
      {bixinhos}
    </div>
  );
}

export default App;
