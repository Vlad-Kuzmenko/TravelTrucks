import s from './App.module.css';
import Home from '../../page/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from '../../page/Catalog/Catalog';
import CatalogDetails from '../../page/CatalogDetails/CatalogDetails';
import TruckFeatures from '../TruckFeatures/TruckFeatures';
import TruckReviews from '../TruckReviews/TruckReviews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetails />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<TruckFeatures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
