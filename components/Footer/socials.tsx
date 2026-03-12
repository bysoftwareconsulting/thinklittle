import Link from "next/link";
import InstagramIcon from "@/lib/Instagram-icon";
import TikTokIcon from "@/lib/Tiktok-Icon";

export default function FooterSocials() {
  const socialLinks = [
    { text: "instagram", link: "https://www.instagram.com" },
    { text: "tiktok", link: "https://www.tiktok.com" },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        if (social.text === "instagram") {
          return (
            <Link
              key={social.text}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 hover:bg-white/10 transition"
            >
              <InstagramIcon className="h-5 w-5 text-[#F3F0E8]" />
            </Link>
          );
        }
        if (social.text === "tiktok") {
            return (
              <Link
                key={social.text}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 hover:bg-white/10 transition"
              >
                <TikTokIcon className="h-5 w-5 text-[#F3F0E8]" />
              </Link>
            );
          }
        return null;
      })}
    </div>
  );
}

