import { Sun } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4 lg:px-12">
      <div className="flex items-center space-x-2">
        <Sun className="h-8 w-8 text-yellow-400" />
        <span className="text-2xl font-bold text-white">Kaushik Energy</span>
      </div>
      <div className="hidden md:flex space-x-8 text-white">
        <a href="#services" className="hover:text-yellow-400 transition">Services</a>
        <a href="#about" className="hover:text-yellow-400 transition">About</a>
        <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
      </div>
    </nav>
  );
}