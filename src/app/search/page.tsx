'use client';

import WarningIcon from "@/components/icons/Warning";
import libAPI from "@/utils/libraryAPI";
import { useEffect, useState } from "react";

export default function Search() {
    const [result, setResult] = useState([]);
    const test = new libAPI();

    useEffect(() => {
        const fetchData = async () => {
            await test.getGenres().then((a) => {
                setResult(a);
            }).catch(console.error);
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div role="alert" className="alert alert-warning">
                    <WarningIcon />
                    <span>Per un problema di API i libri disponibili appariranno come 0 risolveremo al più presto possibile questo bug. Ci scusiamo per il disagio</span>
                </div>
                <br />
                <div className="mb-8 text-center">
                    <h2 className="mb-5 text-5xl font-bold text-primary">Seleziona il genere!</h2>
                </div>
                <div className="mb-8">
                    <div className="grid grid-cols-1 gap-4">
                        {result.map((result: any, index: any) => (
                            <a key={index} href={`/search/${result.description}`} className="card bg-base-100 shadow-md p-4 hover:bg-base-200">
                                <h3 className="text-xl font-semibold">{result.description}</h3>
                                <p className="text-gray-500">Libri Disponibili: <b className={`${result.books > 0 ? 'text-green-600' : 'text-red-600'}`}>{result.books || 0}</b></p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}