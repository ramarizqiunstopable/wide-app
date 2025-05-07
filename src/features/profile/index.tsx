import React from "react";
import { UserProfileCard } from "./components/cardProfile";

export default function ProfileFeature() {
  return (
    <div className="p-4 sm:p-6 flex justify-center items-center min-h-[calc(100vh-100px)]">
      <UserProfileCard />
    </div>
  );
}
