import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  const handleSignIn = (provider: "google" | "github") => {};

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className={"w-full"}
        variant={"outline"}
        onClick={() => handleSignIn("google")}
      >
        <FcGoogle className={"h-5 w-5"} />
      </Button>
      <Button
        size={"lg"}
        className={"w-full"}
        variant={"outline"}
        onClick={() => handleSignIn("github")}
      >
        <FaGithub className={"h-5 w-5"} />
      </Button>
    </div>
  );
};
export default Social;
