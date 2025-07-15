import './App.css';
import Home from '../../page/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/campers" element={<Catalog />} /> */}
        {/* <Route path="/campers/:id" element={<Catalog />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
