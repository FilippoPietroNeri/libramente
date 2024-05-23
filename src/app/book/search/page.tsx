"use client";
import ErrorIcon from '@/components/icons/Error';
import libAPI from '@/utils/libraryAPI';
import React, { useState } from 'react';

export default function BookSearch() {
  const test = new libAPI();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError('');
    if (!query) return;
    // Handle query
    await test.getBooksByName(query).then((a) => {
      console.log(a);
      setResult(a);
      if (!a.length) {
        setError('Impossibile trovare il libro')
      }
    }).catch((er) => {
      setError('Impossibile trovare il libro')
    });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mb-8 text-center">
          <div className="mb-8 text-center">
            <h2 className="mb-5 text-5xl font-bold text-primary">Cerca il libro!</h2>
          </div>
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
            {error ?
              <div role="alert" className="alert alert-error">
                <ErrorIcon />
                <span>{error}</span>
              </div>
              : ""}
            {result.map((result: any, index) => (
              <div key={index} className="card bg-base-100 shadow-md p-4">
                <h3 className="text-xl font-semibold">{result.title}</h3>
                <p className="text-gray-500">Prezzo: <b>€{result.price}</b></p>
                <p className="text-gray-500">Genere: <b><a className="link" href={`/genre/search/${result.genreName}`}>{result.genreName}</a></b></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};
