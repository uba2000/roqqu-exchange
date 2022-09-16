import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pair from "./pages/Pair";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pair" element={<Pair />} />
      </Route>
    </Routes>
  );
}

export default App;
