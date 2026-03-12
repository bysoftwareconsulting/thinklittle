import Logo from "@/components/Logo/logo";
import FooterLinks from "@/components/Footer/footer-links";
import FooterSocials from "@/components/Footer/socials";
import FooterContact from "@/components/Footer/contact"
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="shadow-md">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="flex flex-col sm:flex-row sm:justify-between p-4">
            <div className="flex flex-col space-y-4 py-4 items-center w-48">
              <Logo />
              {/*<FooterSocials />*/}
            </div>
  
            <div className="flex flex-col space-y-2 py-4 w-48">
              <h3>Contact</h3>
              <FooterContact />
            </div>
  
            <div className="flex flex-col space-y-2 py-4 w-48">
              <h3>Pages</h3>
              <FooterLinks />
            </div>
          </div>
  
          <div className="flex flex-col sm:flex-row sm:justify-around gap-2 pb-4">
            <div className="text-center">© 2026 ThinkLittle LLC. All rights reserved</div>
            <div className="text-center">
              Site Credits:{" "}
              <Link target="_blank" href="https://www.bysoftwareconsulting.com/">
                bysoftwareconsulting
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  