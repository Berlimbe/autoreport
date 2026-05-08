import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Auto<span className="text-blue-500">Report</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Welcome to my professional laboratory. Here I document my journey 
            as a developer with real-world applications.
          </p>
        </header>
        
        {/* The Magic Happens Here: Mapping the JSON */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}