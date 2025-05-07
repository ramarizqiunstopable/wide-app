import { Menu, X } from "lucide-react";

export const UseHamburgerButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => (
  <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);
