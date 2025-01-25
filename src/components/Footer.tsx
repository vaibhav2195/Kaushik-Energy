import { Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <Sun className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold">Kaushik Energy</span>
        </div>
        <div className="text-center md:text-right">
          <p>© 2024 Kaushik Energy,vaibhav2195 and Udit Sharma.  All rights reserved.</p>
          <p className="text-gray-400">Powering a sustainable future</p>
        </div>
      </div>
    </footer>
  );
}
