import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", { username, password });

    if (username === "admin" && password === "parthi123") {
      console.log("Login success");
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
  <div className="bg-white p-8 rounded-2xl shadow-2xl ">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="block text-gray-600 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Login
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;
