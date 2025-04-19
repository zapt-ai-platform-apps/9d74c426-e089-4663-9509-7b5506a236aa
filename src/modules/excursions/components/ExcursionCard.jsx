import React from 'react';
import { Link } from 'react-router-dom';

export function ExcursionCard({ excursion }) {
  return (
    <div className="card h-full flex flex-col">
      <img
        src={excursion.imageUrl}
        alt={excursion.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{excursion.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excursion.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-700 font-bold">€{excursion.price}</span>
          <Link
            to={`/escursioni/${excursion.id}`}
            className="btn-primary"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}