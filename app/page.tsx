import Project from "@/components/Project/project";
import { projectData } from "@/lib/data/projectData";

export default function Home() {
  return (
    <main className=""> 
    <section className="w-full h-128 md:h-160 bg-[url('/sunset-coffee.png')] bg-cover bg-center flex justify-between">
    <p></p>
    <p className="text-5xl font-semibold text-black w-120 flex justify-center items-center p-5">
      Sustainable and Creative Home & Garden Solutions
      </p>
    </section>
      <section className="grid gap-4 sm:mx-50 mx-10 sm:mt-20 mt-5">
        {projectData.map((project) =>
          <Project key={project.title} title={project.title} description={project.description} image={project.image} id={project.id} />
        )}
     </section>
    </main>
  );
}
