import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import SaveRecipe from "./pages/SaveRecipe";
import Auth from "./pages/Auth";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/save" element={<SaveRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
