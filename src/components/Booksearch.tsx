import React, { useState } from 'react';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    // @ts-ignore
    setSearchHistory([query, ...searchHistory]);

    // Simula una ricerca di libri (sostituisci con la tua logica di ricerca)
    const simulatedResults = [
      { title: 'Libro 1', author: 'Autore 1' },
      { title: 'Libro 2', author: 'Autore 2' },
    ];

    // @ts-ignore
    setResults(simulatedResults);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Cerca Libri</h1>
        <div className="form-control">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Cerca un libro..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-primary">
              Cerca
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Risultati della ricerca</h2>
        <div className="grid grid-cols-1 gap-4">
          {results.map((result, index) => (
            <div key={index} className="card bg-base-100 shadow-md p-4">
              {/* @ts-ignore */}
              <h3 className="text-xl font-semibold">{result.title}</h3>
              {/* @ts-ignore */}
              <p className="text-gray-500">di {result.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Cronologia delle ricerche</h2>
        <ul className="list-disc list-inside">
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookSearch;
