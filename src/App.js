import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Pages/Account";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="h-full w-full bg-white flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
