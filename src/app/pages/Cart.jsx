import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../modules/cart/CartProvider';
import { BookingForm } from '../../modules/booking/components/BookingForm';

export function CartPage() {
  const { cart, updateParticipants, clearCart, getTotalPrice } = useCart();

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return '';
    return timeString.substring(0, 5); // Extract HH:MM from HH:MM:SS
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Il tuo carrello</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.excursion ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={cart.excursion.imageUrl}
                      alt={cart.excursion.title}
                      className="w-full md:w-32 h-32 object-cover rounded-lg md:mr-6 mb-4 md:mb-0"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">{cart.excursion.title}</h2>
                        <button
                          onClick={clearCart}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {cart.date ? (
                          <>
                            <span className="font-medium">Data:</span> {formatDate(cart.date.date)} ore {formatTime(cart.date.time)}
                          </>
                        ) : (
                          'Nessuna data selezionata'
                        )}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">Prezzo:</span> €{cart.excursion.price} x {cart.participants} = <span className="font-bold text-green-700">€{getTotalPrice()}</span>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 border border-gray-300 rounded-l text-sm cursor-pointer"
                            onClick={() => updateParticipants(Math.max(1, cart.participants - 1))}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-t border-b border-gray-300 text-sm">
                            {cart.participants}
                          </span>
                          <button
                            className="px-2 py-1 border border-gray-300 rounded-r text-sm cursor-pointer"
                            onClick={() => updateParticipants(Math.min(cart.participants + 1, cart.date?.spotsAvailable || 10))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-center">
                <p className="text-gray-500 mb-4">Il tuo carrello è vuoto</p>
                <Link to="/escursioni" className="btn-primary inline-block">
                  Sfoglia le escursioni
                </Link>
              </div>
            )}

            {cart.excursion && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Completa la prenotazione</h2>
                <BookingForm />
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Riepilogo</h2>
              {cart.excursion ? (
                <>
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Prezzo escursione</span>
                      <span>€{cart.excursion.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Partecipanti</span>
                      <span>{cart.participants}</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Totale</span>
                    <span>€{getTotalPrice()}</span>
                  </div>
                </>
              ) : (
                <p className="text-gray-500">Nessun articolo nel carrello</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}