import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Escursioni Cilento</h3>
            <p className="text-gray-300">
              Scopri la bellezza del Parco Nazionale del Cilento con guide esperte e appassionate.
            </p>
            <p className="mt-4 text-sm">
              <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Made on ZAPT
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/escursioni" className="text-gray-300 hover:text-white">Escursioni</Link>
              </li>
              <li>
                <Link to="/info" className="text-gray-300 hover:text-white">Il Parco</Link>
              </li>
              <li>
                <Link to="/contatti" className="text-gray-300 hover:text-white">Contatti</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@escursionicilento.it</li>
              <li>Telefono: +39 123 456 7890</li>
              <li>Indirizzo: Via del Parco 123, Cilento (SA)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-gray-300 text-sm text-center">
          © {new Date().getFullYear()} Escursioni Cilento. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}