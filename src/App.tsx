import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Information from "./components/Information";
import { InstagramLogin } from "./components/instagram-login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InstagramLogin />} />

          <Route path="/info" element={<Information></Information>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
