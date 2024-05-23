'use client';
import ErrorIcon from "@/components/icons/Error";
import SearchIcon from "@/components/icons/Search";
import SuccessIcon from "@/components/icons/Success";
import WarningIcon from "@/components/icons/Warning";
import Logger from "@/utils/Logger";
import libAPI from "@/utils/libraryAPI";
import { Suspense, use, useEffect, useState } from "react";

function getGenreNameFromId(genres:any, genreId:number) 
{
    return (genres.filter((book: any) => book.genreId == genreId)[0]) || null;
}

export default function SearchR({ params }: any) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [result, setResult] = useState([]);
    const [genres, setGenres] = useState([]);
    const test = new libAPI();
    const [book, setBook] = useState({
        id: 0,
        title: '',
        price: '',
        isOut: true,
        isbn: '',
        genreId: 0,
        shelfId: 0,
        genreName: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
        console.log(book.genreId)
        console.log(getGenreNameFromId(genres, book.genreId));
    };

    const handleSubmit = async (e: any) => {
        setSuccess("");
        setError("");
        e.preventDefault();
        console.log('Book added:', book);
        // @ts-ignore
    };

    useEffect(() => {
        const fetchData = async () => {
            await test.getBooksByName(decodeURI(params.name)).catch(async (err) => {
                // @ts-ignore
                console.error(err);
                setError(`Unknown error`);
            }).then((v) => {
                // Ok!
                console.log(v)
                // @ts-ignore
                setResult(v);
                // @ts-ignore
                setBook({
                    id: v[0].id,
                    title: v[0].title,
                    price: v[0].price,
                    isOut: v[0].isOut,
                    isbn: v[0].isbn,
                    genreId: v[0].genreId,
                    shelfId: v[0].shelfId,
                    genreName: v[0].genreName
                })
            })
        }
        const fetchData1 = async () => {
            await test.getGenres().then((a) => {
                setGenres(a);  
                console.log(a);
            }).catch((err) => {
                setError('Unknown Error')
            })
        }
        fetchData1();
        fetchData();
    }, [])

    return (
        <>
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div className="mb-8 text-center">
                    <h2 className="mb-5 text-5xl font-bold text-primary">Aggiungi un nuovo libro!</h2>
                </div>
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
                <Suspense>
                    {result ?
                        <form onSubmit={handleSubmit}>
                            <div className="form-control mb-4">
                                <label className="label" htmlFor="title">Titolo del Libro</label>
                                <input
                                    className="input input-bordered"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={book.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label" htmlFor="price">Prezzo del Libro</label>
                                <input
                                    className="input input-bordered"
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={book.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label" htmlFor="isbn">ISBN</label>
                                <input
                                    className="input input-bordered"
                                    type="text"
                                    id="isbn"
                                    name="isbn"
                                    value={book.isbn || 0}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label" htmlFor="genreId">Genre Id</label>
                                <select
                                    className="select select-bordered"
                                    id="genreId"
                                    name="genreId"
                                    value={book.genreId}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleziona un genere</option>
                                    {genres.map((genre: any) => (
                                        <option key={genre.genreId} value={genre.genreId}>{genre.description}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Modifica Libro</button>
                        </form>
                    : ""}
                </Suspense>
            </div>
        </>
    )
}