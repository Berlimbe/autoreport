import projects from "../../data/projects.json";
import ProjectCard from "../../components/ProjectCard";
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020617] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">My Projects</h1>
          <p className="text-slate-400">A collection of my recent work and experiments.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}