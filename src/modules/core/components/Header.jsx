import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64"
            alt="Logo Escursioni Cilento"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-green-700">Escursioni Cilento</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-green-700">Home</Link>
            </li>
            <li>
              <Link to="/escursioni" className="text-gray-600 hover:text-green-700">Escursioni</Link>
            </li>
            <li>
              <Link to="/info" className="text-gray-600 hover:text-green-700">Il Parco</Link>
            </li>
            <li>
              <Link to="/contatti" className="text-gray-600 hover:text-green-700">Contatti</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}