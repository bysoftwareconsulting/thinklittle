import Image from "next/image"
import Link from "next/link"

export default function FooterSocials() {

    const socialLinks = [{ text: "instagram", image: '/placeholder.png', link: "www.instagram.com" }, { text: "linkedin", image: '/placeholder.png', link: "www.linkedin.com" }]

    return (
        <div className="flex flex-col">
            <div className="hover:pointer">
                {socialLinks.map((key) => {
                    return (
                        <Link href={key.link} key={key.link}>
                            <Image
                                src={key.image}
                                alt={key.text}
                                width={50}
                                height={50}
                            />
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}