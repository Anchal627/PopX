import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Pages/Account";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center pt-10">
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
