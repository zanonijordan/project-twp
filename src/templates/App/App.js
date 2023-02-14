import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { GlobalStyles } from './../../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Login } from '../Login';


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}/>
            </Routes>
          </BrowserRouter>
          <GlobalStyles />
        </ThemeProvider>
    </div>
  );
}

export default App;
