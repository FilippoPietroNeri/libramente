'use client';
import libAPI from "@/utils/libraryAPI";
import { useEffect, useState } from "react";

export default function Books() {
    const [result, setResult] = useState([]);
    const test = new libAPI();
    useEffect(() => {
        const getData = async () => {
            await test.getBooks().then((a) => {
                setResult(a);
            })
        }
        getData();
    }, [])

    return (
        <div className="container mx-auto p-4 pt-20 pb-20">
            <div className="mb-8 text-center">
                <h2 className="mb-5 text-5xl font-bold text-primary">Tutti i libri disponibili al momento!</h2>
            </div>
            <div className="mb-8">
                <div className="grid grid-cols-1 gap-4">
                    {result.map((result: any, index: any) => (
                        <div key={index} className="card bg-base-100 shadow-md p-4">
                            <h3 className="text-xl font-semibold"><a className="link" href={`/book/${result.id}`}>{result.title}</a></h3>
                            <p className="text-gray-500">Prezzo: <b>€{result.price}</b></p>
                            <p className="text-gray-500">Genere: <b><a className="link" href={`/genre/search/${result.genreName}`}>{result.genreName}</a></b></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}