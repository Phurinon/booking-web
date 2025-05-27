import React from "react";
import { SignOutButton } from "@clerk/clerk-react";
import { toast } from "sonner";

function SignOutLink() {
  const handleSignOut = () => {
    toast.success("You have successfully signed out.");
  };

  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleSignOut}>Sign Out</button>
    </SignOutButton>
  );
}

export default SignOutLink;
