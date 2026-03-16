import Image from "next/image";
import { notFound } from "next/navigation";
import { projectData } from "@/lib/data/projectData";

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: String(project.id),
  }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = projectData.find((item) => String(item.id) === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-[#f6f6f3] text-black">
      <section className="w-full">
        <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-6xl">
          {project.title}
        </h1>

        <p className="mt-8 text-base sm:text-xl leading-relaxed max-w-6xl">
          {project.description}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-12 items-start">
          <div className="relative w-full h-[280px] sm:h-[420px] rounded-[2rem] overflow-hidden shadow-xl">
            <Image
              src={project.secondaryImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-base sm:text-xl leading-relaxed max-w-xl">
            {project.secondaryDescription}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Quick Facts
          </h2>

          <div className="mt-8 space-y-5">
            {project.quickFacts.map((fact, index) => (
              <div
                key={index}
                className="text-2xl sm:text-4xl font-semibold leading-snug"
              >
                <span>{fact.factName}: </span>
                <span>{fact.totalCost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}