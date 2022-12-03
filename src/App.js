import NavigasiBar from "./components/NavigasiBar";
import Home from "./components/Home";
import Create from "./components/Create";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigasiBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit/:id" element={<Create />} />
          <Route path="/List" element={<List />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
