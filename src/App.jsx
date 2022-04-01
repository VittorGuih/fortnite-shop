import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './global/global.scss';
import './global/reset.scss';
import { Contact, Home, Store } from './pages/';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
