import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
