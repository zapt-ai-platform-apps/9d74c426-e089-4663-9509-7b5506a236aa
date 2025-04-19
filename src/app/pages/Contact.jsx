import React, { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Contattaci</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Informazioni di contatto</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@escursionicilento.it</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Telefono</h3>
                    <p className="text-gray-600">+39 123 456 7890</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Indirizzo</h3>
                    <p className="text-gray-600">Via del Parco 123, Cilento (SA)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Orari</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Lunedì - Venerdì:</span>
                  <span className="text-gray-600">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sabato:</span>
                  <span className="text-gray-600">9:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Domenica:</span>
                  <span className="text-gray-600">Chiuso</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 text-sm">
                * Durante i mesi estivi gli orari potrebbero variare.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Inviaci un messaggio</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Messaggio inviato!</h3>
                <p>Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="input"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">
                  Invia messaggio
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}