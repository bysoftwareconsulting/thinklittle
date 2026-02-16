import Link from "next/link";

type NavLinksProps = {
  onNavigate?: () => void;
};

export default function NavLinks({ onNavigate }: NavLinksProps) {
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onClick={onNavigate}
          className="text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-3 rounded-lg text-sm font-medium"
        >
          {link.text}
        </Link>
      ))}
    </>
  );
}
