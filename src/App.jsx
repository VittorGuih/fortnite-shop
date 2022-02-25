import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './global/global.scss';
import './global/reset.scss';
import { Contact, Home, Store } from './pages/';

function App() {
  // useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/store' element={<Store />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/store' element={<Store />} />
    //     <Route path='/contact' element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
