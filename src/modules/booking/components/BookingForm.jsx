import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useCart } from '../../cart/CartProvider';
import * as Sentry from '@sentry/browser';

export function BookingForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!cart.excursion || !cart.date) {
      setError('Nessuna escursione selezionata');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const bookingData = {
        excursionId: cart.excursion.id,
        dateId: cart.date.id,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        participants: cart.participants,
        totalPrice: getTotalPrice(),
        notes: formData.notes,
      };
      
      const result = await api.createBooking(bookingData);
      
      // Success - reset form and cart
      clearCart();
      
      // Navigate to confirmation page
      navigate(`/conferma/${result.id}`);
    } catch (error) {
      console.error('Error creating booking:', error);
      Sentry.captureException(error);
      setError(error.message || 'Si è verificato un errore. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  if (!cart.excursion || !cart.date) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg">
        <p>Nessuna escursione selezionata nel carrello.</p>
        <button 
          onClick={() => navigate('/escursioni')}
          className="btn-primary mt-4"
        >
          Sfoglia le escursioni
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="customerName" className="block text-gray-700 mb-2">
          Nome completo *
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      
      <div>
        <label htmlFor="customerEmail" className="block text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="customerEmail"
          name="customerEmail"
          value={formData.customerEmail}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      
      <div>
        <label htmlFor="customerPhone" className="block text-gray-700 mb-2">
          Telefono *
        </label>
        <input
          type="tel"
          id="customerPhone"
          name="customerPhone"
          value={formData.customerPhone}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-gray-700 mb-2">
          Note (opzionale)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="input"
        ></textarea>
      </div>
      
      <div className="pt-4">
        <button
          type="submit"
          className="btn-primary w-full py-3 text-lg"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Elaborazione...
            </span>
          ) : (
            'Conferma prenotazione'
          )}
        </button>
      </div>
    </form>
  );
}