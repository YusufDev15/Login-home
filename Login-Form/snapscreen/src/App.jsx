import { Routes, Route } from "react-router-dom";
import LoginForm from "./Components/auth-folder/LoginForm";
import RegisterForm from "./Components/auth-folder/RegisterForm";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
