import Link from "next/link"

export default function FooterLinks() {
    const Links = [
        { text: "Home", path: "/" },
        { text: "Reviews", path: "/reviews" },
        { text: "About", path: "/about" },
      ];

    return Links.map((link) => {
        return (
            <Link href={link.path} key={link.path} className="hover:text-blue-600 py-2 rounded-md text-sm font-medium">
                {link.text}
            </Link>
        )
    })
}



