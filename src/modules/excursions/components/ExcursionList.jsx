import React from 'react';
import { ExcursionCard } from './ExcursionCard';

export function ExcursionList({ excursions, loading, error }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">
        Si è verificato un errore nel caricamento delle escursioni. Riprova più tardi.
      </div>
    );
  }

  if (!excursions || excursions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nessuna escursione disponibile al momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {excursions.map((excursion) => (
        <ExcursionCard key={excursion.id} excursion={excursion} />
      ))}
    </div>
  );
}