'use client';
import ErrorIcon from "@/components/icons/Error";
import SearchIcon from "@/components/icons/Search";
import SuccessIcon from "@/components/icons/Success";
import WarningIcon from "@/components/icons/Warning";
import Logger from "@/utils/Logger";
import libAPI from "@/utils/libraryAPI";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function SearchR({ params }: any) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [result, setResult] = useState([]);
    const test = new libAPI();

    useEffect(() => {
        const fetchData = async () => {
            await test.getBooksById(params.name).catch(async (err) => {
                // @ts-ignore
                console.error(err);
                setError(`Unknown error`);
            }).then((v) => {
                // Ok!
                console.log(v)
                // @ts-ignore
                setResult(v);
            })
        }
        fetchData();
    }, [])

    const deleteBook = async () => {
        setSuccess("");
        // @ts-ignore
        await test.deleteBook(result[0].id).then((a) => {
            console.log(a)
            setSuccess('Hai eliminato con successo il libro!')
            window.location.reload();
        }).catch((err) => {
            console.error(err);
            setError('Impossibile eliminare questo libro!')
        });
    }

    return (
        <>
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div className="mb-8 text-center">
                    <h2 className="mb-5 text-5xl font-bold text-primary">Libro</h2>
                </div>
                <div className="mb-8">
                    {error ?
                        <div role="alert" className="alert alert-error">
                            <ErrorIcon />
                            <span>{error}</span>
                        </div>
                        : ""}
                    {success ?
                        <div role="alert" className="alert alert-success">
                            <SuccessIcon />
                            <span>{success}</span>
                        </div>
                        : ""}
                    <br />
                    {result.length > 0 ?
                        <>
                            <div className="grid grid-cols-1 gap-4">
                                {result.map((result: any, index: any) => (
                                    <div key={index} className="card bg-base-100 shadow-md p-4">
                                        <h3 className="text-xl font-semibold">{result.title}</h3>
                                        <p className="text-gray-500">Prezzo: <b>€{result.price}</b></p>
                                        <p className="text-gray-500">Genere: <b><a className="link" href={`/genre/search/${result.genreName}`}>{result.genreName}</a></b></p>
                                        <div className="container pt-5">
                                            <Link href={`${result.title}/edit`}>
                                                <button className="btn btn-secondary mr-2">Modifica Libro</button>
                                            </Link>
                                            <button className="btn btn-error" onClick={deleteBook}>Rimuovi Libro</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </> :
                        <>
                            <div role="alert" className="alert alert-warning">
                                <WarningIcon />
                                <span>Hey! Non abbiamo trovato il libro <b>{decodeURI(params.name)}!</b></span>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}