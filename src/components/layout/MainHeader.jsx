import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import Logo from "./Logo";
import SearchToggle from "./SearchToggle";
import HeaderActions from "./HeaderActions";

const MainHeader = ({ isMenuOpen, onMenuToggle }) => {
  return (
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20 sm:mx-8 md:h-20 md:mx-8">

          <button type="button" onClick={onMenuToggle} className="md:hidden">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="hidden flex-1 md:flex md:items-center">
            <SearchToggle />
          </div>

          <div className="flex justify-center md:flex-1">
            <Logo />
          </div>

          <div className="hidden flex-1 justify-end md:flex">
            <HeaderActions />
          </div>

          <div className="md:hidden">
            <HeaderActions mobile />
          </div>

        </div>
      </Container>
  );
};

export default MainHeader;