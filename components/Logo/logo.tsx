import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="relative block h-10 sm:h-12 w-32 sm:w-48 shrink-0">
        <Image
          src="/Endure.png"
          alt="Endure Coffee"
          fill
          className="object-contain"
          priority
        />
      </Link>      
    );
  }