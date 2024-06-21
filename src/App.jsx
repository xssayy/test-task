import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UalPage from "./pages/UalPage/UalPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ual" element={<UalPage />} />
      </Routes>
    </div>
  );
}

export default App;
