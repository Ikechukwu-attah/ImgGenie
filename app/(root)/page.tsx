import React from "react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Home;
