"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Login() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center px-4 py-8 md:p-20 2xl:px-40 2xl:py-20">
        <form className="flex w-full md:w-1/4 flex-col gap-4 md:gap-8">
          <h3 className="switzer-sb text-xl md:text-4xl">Login</h3>
          <p className="switzer-r text-sm text-neutral-mid">
            Welcome back! Please enter your details.
          </p>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
                className="switzer-md"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@jbvantage.com"
              required
              shadow
              className="switzer-r"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Your password"
                className="switzer-md"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              shadow
              className="switzer-r"
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
