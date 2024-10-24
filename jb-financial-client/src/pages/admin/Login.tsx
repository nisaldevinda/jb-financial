"use client";

import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // Important for session cookies
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // If login is successful
      if (data.message === "Login successful") {
        // You might want to store some user info in localStorage if needed
        localStorage.setItem("isAuthenticated", "true");

        // Redirect to admin blogs page
        navigate("/admin/blogs");
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center px-4 py-8 md:p-20 2xl:px-40 2xl:py-20">
        <form
          className="flex w-full md:w-1/4 flex-col gap-4 md:gap-8"
          onSubmit={handleLogin}
        >
          <h3 className="switzer-sb text-xl md:text-4xl">Login</h3>
          <p className="switzer-r text-sm text-neutral-mid">
            Welcome back! Please enter your details.
          </p>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative switzer-r text-sm"
              role="alert"
            >
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="username"
                value="Your username"
                className="switzer-md"
              />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              shadow
              className="switzer-r"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Your password"
                className="switzer-md"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              shadow
              className="switzer-r"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="switzer-md">
              Remember me
            </Label>
          </div>
          <Button
            type="submit"
            className="primary-button-2"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
