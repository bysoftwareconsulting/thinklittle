import NavLinks from "@/components/Nav/nav-links"
import Logo from "@/components/Logo/logo";
import Hamburger from "@/components/Nav/hamburger";

export default function Nav() {
  return (
    <nav className="shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 min-w-0">
          <div className="shrink-0">
            <Logo />
          </div>

            <div className="hidden md:flex ml-10 space-x-4 items-center justify-end flex-1">
            <NavLinks />
            </div>

          <div className="md:hidden shrink-0">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
}

