import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
