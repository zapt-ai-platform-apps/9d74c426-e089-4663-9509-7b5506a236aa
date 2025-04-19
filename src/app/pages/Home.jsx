import React from 'react';
import { Link } from 'react-router-dom';
import { ExcursionList } from '../../modules/excursions/components/ExcursionList';
import { useFeaturedExcursions } from '../../modules/excursions/hooks';

export function HomePage() {
  const { excursions, loading, error } = useFeaturedExcursions();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('PLACEHOLDER')",
            filter: 'brightness(0.7)'
          }}
          data-image-request="scenic landscape of Cilento National Park in Italy with mountains and coastline"
        ></div>
        <div className="container-custom relative z-10 py-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Scopri la magia del Parco Nazionale del Cilento
            </h1>
            <p className="text-xl mb-8">
              Esplora uno dei parchi più belli d'Italia con guide esperte e appassionate.
              Escursioni, tour e attività per tutti.
            </p>
            <Link to="/escursioni" className="btn-primary inline-block text-lg px-6 py-3">
              Scopri le nostre escursioni
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Excursions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Le nostre escursioni in evidenza</h2>
          <ExcursionList excursions={excursions} loading={loading} error={error} />
          {!loading && !error && excursions.length > 0 && (
            <div className="text-center mt-10">
              <Link to="/escursioni" className="btn-secondary inline-block">
                Vedi tutte le escursioni
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* About the Park */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Il Parco Nazionale del Cilento</h2>
              <p className="text-gray-700 mb-4">
                Il Parco Nazionale del Cilento, Vallo di Diano e Alburni è il secondo parco più grande d'Italia 
                e uno dei più importanti d'Europa. Con i suoi paesaggi mozzafiato, dal mare cristallino alle 
                montagne selvagge, offre infinite possibilità di esplorazione.
              </p>
              <p className="text-gray-700 mb-4">
                Dichiarato Patrimonio dell'Umanità UNESCO, il parco vanta una ricca biodiversità, 
                importanti siti archeologici come Paestum e Velia, e una tradizione gastronomica 
                che fa parte della rinomata Dieta Mediterranea.
              </p>
              <Link to="/info" className="btn-primary inline-block mt-2">
                Scopri di più
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxiZWF1dGlmdWwlMjBsYW5kc2NhcGUlMjBvZiUyMENpbGVudG8lMjBOYXRpb25hbCUyMFBhcmslMjBzaG93aW5nJTIwbW91bnRhaW5zJTJDJTIwYW5jaWVudCUyMHZpbGxhZ2VzJTIwYW5kJTIwTWVkaXRlcnJhbmVhbiUyMGNvYXN0bGluZXxlbnwwfHx8fDE3NDUwODM5MjR8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Panorama del Parco Nazionale del Cilento" 
                className="rounded-lg shadow-lg" 
                data-image-request="beautiful landscape of Cilento National Park showing mountains, ancient villages and Mediterranean coastline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Cosa dicono di noi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1515138692129-197a2c608cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMG9mJTIwbWlkZGxlLWFnZWQlMjBzbWlsaW5nJTIwSXRhbGlhbiUyMG1hbnxlbnwwfHx8fDE3NDUwODM5MjR8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Foto del cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  data-image-request="portrait of middle-aged smiling Italian man"
                />
                <div>
                  <h4 className="font-semibold">Marco Bianchi</h4>
                  <div className="text-yellow-500 flex">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Un'esperienza fantastica! La guida era molto preparata e ci ha fatto scoprire luoghi 
                meravigliosi che non avremmo mai trovato da soli. Consiglio vivamente!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdCUyMG9mJTIweW91bmclMjB3b21hbiUyMHdpdGglMjBkYXJrJTIwaGFpciUyMHNtaWxpbmd8ZW58MHx8fHwxNzQ1MDgzOTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Foto del cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  data-image-request="portrait of young woman with dark hair smiling"
                />
                <div>
                  <h4 className="font-semibold">Laura Rossi</h4>
                  <div className="text-yellow-500 flex">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Escursione al Monte Bulgheria stupenda! Panorami incredibili e un'organizzazione 
                impeccabile. Tornerò sicuramente per provare altri percorsi!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1515138692129-197a2c608cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMG9mJTIwb2xkZXIlMjBnZW50bGVtYW4lMjB3aXRoJTIwZ2xhc3NlcyUyMHNtaWxpbmd8ZW58MHx8fHwxNzQ1MDgzOTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Foto del cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  data-image-request="portrait of older gentleman with glasses smiling"
                />
                <div>
                  <h4 className="font-semibold">Giuseppe Verdi</h4>
                  <div className="text-yellow-500 flex">
                    {'★'.repeat(4)}{'☆'.repeat(1)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Ottima giornata trascorsa alla scoperta delle grotte marine di Palinuro. 
                Guide esperte e simpatiche. L'unico neo è stato il tempo un po' limitato per il bagno."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}