"use client";

import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

interface User {
  username: string;
  password: string;
}

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Fetch user data from the JSON file
      const response = await fetch("/auth/users.json");
      const users: User[] = await response.json();

      // Check if the entered username and password match any user
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // If user is found, redirect to the admin blogs page
        navigate("/admin/blogs");
      } else {
        // If no match is found, display an error message
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error fetching users:", error);
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
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
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
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="switzer-md">
              Remember me
            </Label>
          </div>
          <Button type="submit" className="primary-button-2">
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
