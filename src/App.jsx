import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BasePage from './pages/BasePage/BasePage';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path="/" element={<BasePage />}> 
          <Route index element={<Home />} />
          <Route path="guia-animal" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
