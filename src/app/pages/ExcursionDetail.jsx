import React from 'react';
import { useParams } from 'react-router-dom';
import { useExcursion } from '../../modules/excursions/hooks';
import { ExcursionDetail as ExcursionDetailComponent } from '../../modules/excursions/components/ExcursionDetail';

export function ExcursionDetailPage() {
  const { id } = useParams();
  const { excursion, loading, error } = useExcursion(id);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <ExcursionDetailComponent 
          excursion={excursion}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}