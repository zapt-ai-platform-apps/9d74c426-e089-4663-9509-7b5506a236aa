import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../cart/CartProvider';

export function ExcursionDetail({ excursion, loading, error }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [participants, setParticipants] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

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
        Si è verificato un errore nel caricamento dell'escursione. Riprova più tardi.
      </div>
    );
  }

  if (!excursion) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Escursione non trovata.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedDate) {
      alert('Per favore seleziona una data per l\'escursione');
      return;
    }

    addToCart(excursion, selectedDate, participants);
    navigate('/carrello');
  };

  // Format dates for display
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  // Format time for display
  const formatTime = (timeString) => {
    return timeString.substring(0, 5); // Extract HH:MM from HH:MM:SS
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-96">
        <img
          src={excursion.imageUrl}
          alt={excursion.title}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{excursion.title}</h1>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {excursion.duration}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
              </svg>
              {excursion.difficulty}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {excursion.location}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Descrizione</h2>
            <div className="prose max-w-none text-gray-700 mb-6">
              <p>{excursion.description}</p>
            </div>

            <h2 className="text-xl font-semibold mb-4">Punto di ritrovo</h2>
            <p className="text-gray-700 mb-6">{excursion.meetingPoint}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Cosa portare</h3>
                <p className="text-gray-700">{excursion.whatToBring || 'Non specificato'}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Incluso</h3>
                <p className="text-gray-700">{excursion.included || 'Non specificato'}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Non incluso</h3>
                <p className="text-gray-700">{excursion.notIncluded || 'Non specificato'}</p>
              </div>
            </div>

            {excursion.galleryImages && excursion.galleryImages.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Galleria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {excursion.galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${excursion.title} - Immagine ${index + 1}`}
                      className="rounded-lg h-40 w-full object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <div className="text-2xl font-bold text-green-700 mb-4">€{excursion.price}</div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Seleziona data</label>
                <div className="space-y-2">
                  {excursion.availableDates && excursion.availableDates.length > 0 ? (
                    excursion.availableDates.map((date) => (
                      <div
                        key={date.id}
                        className={`p-3 border rounded-lg cursor-pointer ${
                          selectedDate?.id === date.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <div className="font-medium">{formatDate(date.date)}</div>
                        <div className="text-sm text-gray-500">
                          Ore {formatTime(date.time)} • {date.spotsAvailable} posti disponibili
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Nessuna data disponibile al momento.</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Numero di partecipanti</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-3 py-1 border border-gray-300 rounded-l-lg cursor-pointer"
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={selectedDate?.spotsAvailable || excursion.maxParticipants}
                    value={participants}
                    onChange={(e) => setParticipants(Math.min(parseInt(e.target.value) || 1, selectedDate?.spotsAvailable || excursion.maxParticipants))}
                    className="w-16 py-1 text-center border-t border-b border-gray-300 box-border"
                  />
                  <button
                    type="button"
                    className="px-3 py-1 border border-gray-300 rounded-r-lg cursor-pointer"
                    onClick={() => setParticipants(Math.min(participants + 1, selectedDate?.spotsAvailable || excursion.maxParticipants))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!excursion.availableDates || excursion.availableDates.length === 0}
                className="btn-primary w-full py-3"
              >
                Prenota ora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}