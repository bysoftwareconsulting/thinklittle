import Link from "next/link"

export default function FooterLinks() {
    const Links = [
        { text: "Home", path: "/" }, 
        { text: "About", path: "/about" }, 
        { text: "Services", path: "/services" }, 
        { text: "Contact", path: "/contact" }]

    return Links.map((link) => {
        return (
            <Link href={link.path} key={link.path} className="text-gray-700 hover:text-blue-600 py-2 rounded-md text-sm font-medium">
                {link.text}
            </Link>
        )
    })
}



