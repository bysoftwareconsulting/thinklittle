import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image 
            src="/placeholder.png"
            width={75}
            height={75}
            alt="placeholder Logo"
            />
        </Link>
    )
}