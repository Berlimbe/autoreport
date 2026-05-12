import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor (Glow effects) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Main Container - Glassmorphism Effect */}
      <div className="max-w-5xl w-full z-10 p-8 md:p-16 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            {"Hi, I'm"} <span className="text-blue-500">Bernardo</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium mb-6">
            Full-stack Developer & Software Architect
          </p>
          <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-md">
            I build high-performance applications and clean digital experiences.
            Focused on JavaScript ecosystem and modern web architectures.
          </p>

          <nav className="flex gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Projects
            </Link>
          </nav>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border-2 border-slate-700 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <img
              src="https://github.com/Berlimbe.png"
              alt="Bernardo"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          {/* Decorative element behind image */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-blue-500/10 rounded-3xl rotate-6" />
        </div>
      </div>

      {/* Bottom Left Menu Indicator (N) */}
      <div className="absolute bottom-8 left-8 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 font-bold text-blue-500 shadow-xl cursor-pointer hover:bg-slate-800 transition-colors">
        N
      </div>
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <ThemeToggle />
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 font-bold text-blue-500 shadow-xl">
          N
        </div>
      </div>
    </main>
  );
}
