import React from 'react';

export function InfoPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Il Parco Nazionale del Cilento</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Storia e Territorio</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Il Parco Nazionale del Cilento, Vallo di Diano e Alburni è il secondo parco per dimensioni in Italia, 
                  istituito nel 1991 a tutela di un territorio di straordinaria bellezza e importanza culturale.
                </p>
                <p className="mb-4">
                  Nel 1998, il parco è stato dichiarato Patrimonio dell'Umanità dall'UNESCO, riconoscendo 
                  l'eccezionale valore di un'area che coniuga meravigliosamente natura, storia e cultura.
                </p>
                <p>
                  Il territorio del parco si estende dalla costa tirrenica fino ai piedi dell'Appennino Campano-Lucano, 
                  comprendendo montagne, colline, fiumi, spiagge e un mare cristallino. All'interno del parco si trovano 
                  anche i siti archeologici di Paestum e Velia, testimonianze della Magna Grecia.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Biodiversità</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Il Parco del Cilento ospita una ricchissima biodiversità, con oltre 1800 specie di piante autoctone, 
                  molte delle quali endemiche, e una grande varietà di fauna selvatica.
                </p>
                <p className="mb-4">
                  Tra le specie animali presenti nel parco si possono trovare il lupo appenninico, la lontra, 
                  l'aquila reale, il falco pellegrino e numerose specie di uccelli migratori.
                </p>
                <p>
                  La varietà di ambienti, dalla costa alle montagne, garantisce una grande diversità di ecosistemi, 
                  rendendo il parco un vero e proprio paradiso per gli amanti della natura.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Tradizioni e Gastronomia</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Il Cilento è la culla della Dieta Mediterranea, riconosciuta dall'UNESCO come patrimonio immateriale 
                  dell'umanità. La cucina cilentana si basa su ingredienti semplici e genuini: olio d'oliva, verdure, 
                  legumi, pesce, pasta fatta in casa.
                </p>
                <p className="mb-4">
                  Prodotti tipici del territorio sono la mozzarella di bufala, il carciofo bianco di Pertosa, 
                  i fichi bianchi del Cilento, il vino DOC e l'olio extravergine d'oliva.
                </p>
                <p>
                  Le tradizioni popolari sono ancora molto sentite, con feste e sagre che si svolgono durante tutto l'anno 
                  nei caratteristici borghi del parco, permettendo ai visitatori di immergersi nella cultura locale.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Luoghi da non perdere</h2>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium text-green-700">Paestum</h3>
                  <p className="text-gray-600 text-sm">Sito archeologico greco con tre templi dorici tra i meglio conservati al mondo.</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium text-green-700">Grotte di Pertosa-Auletta</h3>
                  <p className="text-gray-600 text-sm">Spettacolari grotte carsiche con un fiume sotterraneo navigabile.</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium text-green-700">Costa degli Infreschi</h3>
                  <p className="text-gray-600 text-sm">Area marina protetta con calette nascoste e acque cristalline.</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium text-green-700">Monte Cervati</h3>
                  <p className="text-gray-600 text-sm">La cima più alta della Campania con sentieri panoramici.</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium text-green-700">Borgo di Castellabate</h3>
                  <p className="text-gray-600 text-sm">Pittoresco borgo medievale con vista sul mare, patrimonio UNESCO.</p>
                </li>
                <li>
                  <h3 className="font-medium text-green-700">Baia degli Infreschi</h3>
                  <p className="text-gray-600 text-sm">Una delle spiagge più belle d'Italia, raggiungibile solo a piedi o in barca.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Come muoversi nel parco</h2>
              <div className="text-gray-700">
                <p className="mb-4">
                  Il modo migliore per esplorare il Parco del Cilento è in auto, data la vastità del territorio e la 
                  distribuzione dei luoghi di interesse.
                </p>
                <p className="mb-4">
                  Per gli amanti del trekking, il parco offre numerosi sentieri segnalati, tra cui un tratto del 
                  Sentiero Italia e della Via Silente, un percorso ciclabile di circa 600 km.
                </p>
                <p>
                  Durante l'estate, servizi di trasporto marittimo collegano le principali località costiere, 
                  offrendo escursioni alle grotte marine e alle spiagge più remote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}