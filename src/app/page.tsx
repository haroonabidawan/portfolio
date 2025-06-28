export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1117] text-white px-6">
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Something impressive is coming soon.
        </h1>
        <p className="text-gray-400 text-lg">
          I’m currently building my personal portfolio site. In the meantime,
          feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/haroonabidawan1"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or reach out via email.
        </p>
        <p className="text-sm text-gray-500">
          haroon.abid.1999@gmail.com | 🇧🇭 Bahrain
        </p>
      </div>
    </div>
  );
}
