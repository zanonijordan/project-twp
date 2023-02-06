import { Menu } from '../../components/Menu';
import { Home } from '../Home';
import './../../styles/App.css';

function App() {
  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
