import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="relative block h-10 sm:h-12 w-32 sm:w-48 shrink-0">
        <Image
          src="/thinkLittle.png"
          alt="Think Little LLC Logo"
          fill
          className="object-contain scale-300"
          priority
        />
      </Link>      
    );
  }