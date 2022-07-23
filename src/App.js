import './App.css';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="items/:itemId" element={<ProductDetails />} exact></Route>
          </Routes>
    </div>
  );
}

export default App;
