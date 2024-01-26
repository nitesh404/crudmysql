import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./create.jsx";
import Edit from "./Edit.jsx";
// import Delete from "./Delete.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
        {/* <Route path="/Create" element={<Delete />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
