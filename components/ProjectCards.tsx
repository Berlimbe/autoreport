interface ProjectProps {
    title: string;
    role: string;
    description: string;
    techstack: string[];
    links: { github: string; live: string };
    videoUrl: string;
  }
  
  export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group">
        {/* Video Preview */}
        <div className="aspect-video w-full bg-slate-800">
          <iframe
            src={project.videoUrl}
            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
            title={project.title}
            allowFullScreen
          />
        </div>
  
        {/* Content */}
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-blue-400 text-sm font-medium mb-3">{project.role}</p>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
  
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techstack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-md">
                {tech}
              </span>
            ))}
          </div>
  
          {/* Links */}
          <div className="flex gap-4">
            <a href={project.links.github} target="_blank" className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
              GitHub →
            </a>
            <a href={project.links.live} target="_blank" className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    );
  }