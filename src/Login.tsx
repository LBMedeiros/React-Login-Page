import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!email || !senha) {
      setErro("Please fill in all fields!");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Invalid email!");
      return;
    }

    if (senha.length < 4) {
      setErro("Password must have at least 4 characters!");
      return;
    }

    if (email === "admin@email.com" && senha === "1234") {
      setSucesso("✓ Login successful! Welcome!");
      setTimeout(() => {
        console.log("Redirecting...");
      }, 2000);
    } else {
      setErro("Incorrect email or password!");
    }

    console.log("Email:", email);
    console.log("Password:", senha);
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    setSucesso("✓ Google login started!");
  };

  const handleGitHubLogin = () => {
    console.log("Login com GitHub");
    setSucesso("✓ GitHub login started!");
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-md">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            title="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v4m0 12v4M2 12h4m12 0h4M4.22 4.22l2.83 2.83m8.9 0l2.83-2.83M4.22 19.78l2.83-2.83m8.9 0l2.83 2.83" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <h1
          className={`text-4xl font-bold mb-12 text-center transition-colors ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          React Login Page
        </h1>

        <div
          className={`p-8 rounded-lg shadow-lg transition-colors ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 text-center transition-colors ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Sign In
          </h2>

          {erro && (
            <div
              className={`mb-4 p-3 border rounded transition-colors ${
                darkMode
                  ? "bg-red-900 border-red-700 text-red-200"
                  : "bg-red-100 border-red-400 text-red-700"
              }`}
            >
              ✗ {erro}
            </div>
          )}

          {sucesso && (
            <div
              className={`mb-4 p-3 border rounded transition-colors ${
                darkMode
                  ? "bg-green-900 border-green-700 text-green-200"
                  : "bg-green-100 border-green-400 text-green-700"
              }`}
            >
              {sucesso}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div
              className={`flex-1 border-t ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            ></div>
            <div
              className={`px-3 text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              or
            </div>
            <div
              className={`flex-1 border-t ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            ></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleLogin}
              className={`w-full flex items-center justify-center gap-2 font-semibold py-2 px-4 rounded hover:opacity-90 transition ${
                darkMode
                  ? "bg-gray-700 text-gray-100 border border-gray-600 hover:bg-gray-600"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            <button
              onClick={handleGitHubLogin}
              className={`w-full flex items-center justify-center gap-2 font-semibold py-2 px-4 rounded hover:opacity-90 transition ${
                darkMode
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
          </div>

          {/* Register Link */}
          <div
            className={`text-center border-t pt-4 transition-colors ${
              darkMode ? "border-gray-600" : "border-gray-300"
            }`}
          >
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't have an account?{" "}
              <button
                onClick={() => console.log("Redirect to registration")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Create account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
