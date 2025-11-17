import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Registered user:", { email, username, password, dob });
    // TODO: Send data to backend
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center font-sans bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-xl font-bold text-gray-800 mb-6">
          Create your account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          {/* Retype Password */}
          <div className="flex flex-col">
            <label htmlFor="retypePassword" className="text-sm text-gray-700 mb-1">
              Retype Password
            </label>
            <input
              type="password"
              id="retypePassword"
              placeholder="••••••••"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dob" className="text-sm text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center -mt-2">{error}</p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-base rounded-lg transition"
          >
            Register
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}