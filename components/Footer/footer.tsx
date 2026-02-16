import Logo from "@/components/Logo/logo";
import FooterLinks from "@/components/Footer/footer-links";
import FooterSocials from "@/components/Footer/socials";
import FooterContact from "@/components/Footer/contact"
import Link from "next/link";

export default function Footer() {
    return (
        <div className="shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-around p-4 flex-col sm:flex-row">
                    <div className="flex flex-col space-x-4 py-4">
                        <Logo />
                        <FooterSocials />
                    </div>
                    <div className="flex flex-col space-x-4 py-4">
                        <h3>Contact</h3>
                        <FooterContact />
                    </div>
                    <div className="flex flex-col space-x-4 py-4">
                        <h3>Pages</h3>
                        <FooterLinks />
                    </div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="text-center">© 2026 bysoftwareconsulting. All rights reserved</div>
                    <div>Site Credits: <Link target="_blank" href='https://www.bysoftwareconsulting.com/'>bysoftwareconsulting</Link></div>
                </div>
            </div>
        </div>
    );
};  