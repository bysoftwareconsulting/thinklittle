import NavLinks from "@/components/Nav/nav-links"
import Logo from "@/components/Logo/logo";
import Hamburger from "@/components/Nav/hamburger";

export default function Nav() {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex space-x-4">
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};