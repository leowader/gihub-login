import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Information from "./components/Information";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/info" element={<Information></Information>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
