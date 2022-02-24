import './global/reset.scss';
import './global/global.scss';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/home';
import { Store } from './components/Store/store';
import { Contact } from './components/Contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
