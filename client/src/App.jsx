import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
