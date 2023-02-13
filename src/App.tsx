import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import axios, { AxiosError } from "axios";
import { SWRConfig } from "swr";
import Login from "./pages/login/Login";

function App() {
  axios.defaults.baseURL = "https://api.realworld.io";

  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <SWRConfig value={{ fetcher }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </SWRConfig>
  );
}

export default App;
