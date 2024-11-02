import { ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Powering Tomorrow with <span className="text-yellow-400">Solar Energy</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Transform your energy consumption with sustainable solar solutions tailored for your needs
        </p>
        <a href="#contact" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
          Get Started <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}