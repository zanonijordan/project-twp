import { Menu } from '../../components/Menu';
import { Home } from '../Home';
import { GlobalStyles } from './../../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';


function App() {
  return (
    <div className="App">
        <Menu />
        <ThemeProvider theme={theme}>
          <Home />
          <GlobalStyles />
        </ThemeProvider>
    </div>
  );
}

export default App;
