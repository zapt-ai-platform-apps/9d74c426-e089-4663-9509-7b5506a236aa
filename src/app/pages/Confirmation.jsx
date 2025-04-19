import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function ConfirmationPage() {
  const { id } = useParams();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Prenotazione Confermata!</h1>
          <p className="text-gray-600 mb-6">
            Grazie per la tua prenotazione. Abbiamo inviato una email di conferma con tutti i dettagli.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-gray-700"><span className="font-medium">Numero prenotazione:</span> {id}</p>
          </div>
          
          <p className="text-gray-600 mb-6">
            Per qualsiasi domanda o modifica alla tua prenotazione, contattaci via email o telefono.
          </p>
          
          <Link to="/" className="btn-primary inline-block">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}