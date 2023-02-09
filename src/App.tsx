import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "https://api.realworld.io/api";
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
