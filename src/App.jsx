import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import Cartoons from "./containers/Cartoons/Cartoons";
import CartoonForm from "./containers/CartoonForm/CartoonForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartoons" element={<Cartoons />} />
        <Route path="/cartoons/create-cartoon" element={<CartoonForm />} />
        <Route path="/cartoons/edit-cartoon" element={<CartoonForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
