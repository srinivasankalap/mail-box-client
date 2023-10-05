import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  return (
    <div className="App">
      <Routes>
        
      <Route path="/" element={<Authentication />} />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;