'use client';

import { Alert } from "@/components/Alert";
import Logger from "@/utils/Logger";
import libAPI from "@/utils/libraryAPI";
import { useState } from "react";

export default function Search() {
    const [error, setError] = useState("");
    const handleButton = async (event: any) => {
        const input = document.getElementById('search');
        const test = new libAPI();

        await test.getBookShelfById(111111).catch(async (err) => {
            // @ts-ignore
            setError(`Il libro scelto è incorretto oppure non esiste.`);
        }).then((v) => {
            // Ok!
        })
    }
    return (
        <>
            {error ?
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>
            : ""}
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div className="text-center mb-8">
                    <h2 className="mb-5 text-5xl font-bold text-primary">Cerca il tuo libro!</h2>
                </div>
                <div className="relative">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" id="search" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn btn-primary" onClick={handleButton}>Cerca <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </div>
            </div>
        </>
    )
}