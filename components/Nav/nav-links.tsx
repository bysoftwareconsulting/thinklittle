import Link from "next/link";

type NavLinksProps = {
  onNavigate?: () => void;
};

export default function NavLinks({ onNavigate }: NavLinksProps) {
  const links = [
    { text: "Home", path: "/" },
    { text: "Reviews", path: "/reviews" },
    { text: "About", path: "/about" },
  ];

  return (
    <>
      {links.map((link) => {
        return (
            <Link
            key={link.path}
            href={link.path}
            onClick={onNavigate}
            className="text-white-700 border-b-2 border-transparent hover:border-white hover:scale-110 px-4 py-3 text-base font-medium transition duration-500"
            >
            {link.text}
            </Link>
        );
      })}
    </>
  );
}
