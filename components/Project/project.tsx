import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip/tooltip";

type productProps = {
    id:number
    title: string,
    description: string,
    image: string
}

export default function Project({ title, description, image,id }: productProps) {
    return (
        <Link href={`/project/${id}`}>
            <Tooltip text="Click to read more about this project">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-10 justify-center">
            
            <Image
                src={image}
                alt={`${title} project image`}
                width={400}
                height={400}
                className="rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2 max-w-xl">
                <div className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {title}
                </div>
                <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {description.length > 200
                        ? description.slice(0, 200) + "... Read More"
                        : description}
                </div>

            </div>
        
        </div>
        </Tooltip>
        </Link>
    )
}