import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./Screens/Header";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Landing from "./Screens/Landing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/app" element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
