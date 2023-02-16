import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { AxiosError } from "axios";
import { SWRConfig } from "swr";
import Login from "./pages/login/Login";
import { customGet } from "./api/config";
import Editor from "./pages/editor/Editor";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

function App() {
  const fetcher = async (url: string) => {
    try {
      const data = await customGet(url);
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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </SWRConfig>
  );
}

export default App;
