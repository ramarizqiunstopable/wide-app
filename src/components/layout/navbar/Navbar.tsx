import { useState } from "react";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";
import { UseHamburgerButton } from "./hooks/UseHamburgerButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Wide Apps</div>
        <UseHamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="hidden sm:flex">
          <NavLinks />
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden mt-3">
          <MobileMenu setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};
