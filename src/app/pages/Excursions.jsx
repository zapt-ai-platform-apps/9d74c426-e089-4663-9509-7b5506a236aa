import React from 'react';
import { useExcursions } from '../../modules/excursions/hooks';
import { ExcursionList } from '../../modules/excursions/components/ExcursionList';

export function ExcursionsPage() {
  const { excursions, loading, error } = useExcursions();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2">Le nostre escursioni</h1>
        <p className="text-gray-600 mb-8">Scopri tutte le nostre proposte per esplorare il Parco Nazionale del Cilento</p>
        
        <ExcursionList excursions={excursions} loading={loading} error={error} />
      </div>
    </div>
  );
}