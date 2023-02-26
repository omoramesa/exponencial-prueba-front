import { Route, Routes } from "react-router-dom";
import {Home} from "./components/home/Home";
import {Products} from "./components/products/Products";
import {Stores} from "./components/stores/Stores";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Stores/>} />
      <Route path="/product" element={<Products/>} />
    </Routes>
   
  );
}

export default App;
