import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login></Login>
      </BrowserRouter>
    </>
  );
}

export default App;
