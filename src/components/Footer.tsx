// import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} Haroon Abid Awan. All rights reserved.
        </div>
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/haroonabidawan1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition"
          >
            {/* <FaLinkedin /> */}
          </a>
          <a
            href="https://github.com/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition"
          >
            {/* <FaGithub /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}
