import './App.css';
import Home from '../../page/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../../page/Catalog/Catalog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        {/* <Route path="/campers/:id" element={<Catalog />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
