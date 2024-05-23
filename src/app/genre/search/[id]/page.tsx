'use client';
import ErrorIcon from "@/components/icons/Error";
import SearchIcon from "@/components/icons/Search";
import WarningIcon from "@/components/icons/Warning";
import Logger from "@/utils/Logger";
import libAPI from "@/utils/libraryAPI";
import { use, useEffect, useState } from "react";

export default function SearchR({ params }: any) {
    const [query, setQuery] = useState('');
    const [error, setError] = useState("");
    const [result, setResult] = useState([]);
    const [genreId, setGenreId] = useState(0);
    const test = new libAPI();

    useEffect(() => {
        const fetchData = async () => {
            await test.getBooksByGenre(params.id).catch(async (err) => {
                // @ts-ignore
                setError(`Il libro scelto è incorretto oppure non esiste.`);
            }).then((v) => {
                // Ok!
                console.log(v)
                // @ts-ignore
                setResult(v);
            })
        };

        const fetchData2 = async () => {
            await test.getGenreIdByGenreName(params.id).catch(async (err) => {
                // @ts-ignore
                setError(`Unknown error`);
            }).then((v) => {
                // Ok!
                console.log(v)
                // @ts-ignore
                setGenreId(v);
            })
        }
        fetchData();
        fetchData2();
    }, [])

    return (
        <>
            {error ?
                <div role="alert" className="alert alert-error">
                    <ErrorIcon />
                    <span>{error}</span>
                </div>
                : ""}
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div className="mb-8 text-center">
                    <h2 className="mb-5 text-5xl font-bold text-primary">Lista di libri della categoria {params.id}</h2>
                </div>
                <div className="mb-8">
                    <br />
                    {result.length > 0 ?
                        <>
                            <div className="grid grid-cols-1 gap-4">
                                {result.map((result: any, index: any) => (
                                    <div key={index} className="card bg-base-100 shadow-md p-4">
                                        <h3 className="text-xl font-semibold"><a className="link" href={`/book/${result.title}`}>{result.title}</a></h3>
                                        <p className="text-gray-500">Prezzo: <b>€{result.price}</b></p>
                                    </div>
                                ))}
                            </div>
                        </> :
                        <>
                            <div role="alert" className="alert alert-warning">
                                <WarningIcon />
                                <span>Hey! Non abbiamo trovato libri con la categoria <b>{params.id}!</b></span>
                            </div>
                        </>}
                </div>
                <a className="btn btn-primary" href={`/book/add?genreName=${params.id}&genreId=${genreId}`}> + Aggiungi un nuovo libro</a>
            </div>
        </>
    )
}