'use client';
import Error from "@/components/Error";
import ErrorIcon from "@/components/icons/Error";
import SearchIcon from "@/components/icons/Search";
import SuccessIcon from "@/components/icons/Success";
import WarningIcon from "@/components/icons/Warning";
import Logger from "@/utils/Logger";
import libAPI from "@/utils/libraryAPI";
import { Suspense, use, useEffect, useState } from "react";


function getGenreNameFromId(genres:any, genreId:number) 
{
    return (genres.filter((book: any) => book.genreId == Number(genreId))[0]) || null;
}

export default function SearchR({ params }: any) {
    const test = new libAPI();
    const [maintenance, setMaintenance] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [result, setResult] : any = useState({});
    const [genres, setGenres] = useState([]);
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
        let updatedFormData = {
            ...book,
            [name]: value
        };

        updatedFormData.genreId = Number(updatedFormData.genreId)

        if (name == "genreId") {
            const genre = getGenreNameFromId(genres, Number(updatedFormData.genreId));
            console.log('handleChange genre', genre);
            if (genre)
            {
                updatedFormData.genreName = genre.description
            } else {
                updatedFormData.genreName = ""
            }
        }

        setBook(updatedFormData);
    };

    const handleSubmit = async (e: any) => {
        setSuccess("");
        setError("");
        e.preventDefault();
        console.log('Book added:', book);
        // @ts-ignore
        await test.updateBook(book).then((a) => {
            console.log(a)
            setSuccess('Hai modificato con successo il libro!')
        }).catch((err) => {
            console.error(err);
            setError('Impossibile modificare questo libro!')
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setMaintenance(true);
            await test.getBooksByName(decodeURI(params.name)).catch(async (err) => {
                // @ts-ignore
                console.error(err);
                setError(`Unknown error`);
            }).then((v) => {
                // Ok!
                console.log(v)
                // @ts-ignore
                setResult(v[0]);
                // @ts-ignore
                setBook(v[0]);
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
            {!maintenance ? 
                <div className="container mx-auto p-4 pt-20 pb-20" >
                    <div className="mb-8 text-center">
                        <h2 className="mb-5 text-5xl font-bold text-primary">Modifica Libro</h2>
                        <span className="text-gray-500">Pensi di aver trovato uno sbaglio nel libro? Modificalo ora.</span>
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
                        {book ?
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
                                        value={Number(book.price)}
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
                                        value={Number(book.genreId)}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleziona un genere</option>
                                        {genres.map((genre: any) => (
                                            <option key={genre.genreId} value={genre.genreId}>[{genre.genreId}] {genre.description}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Modifica Libro</button>
                            </form>
                        : ""}
                    </Suspense>
                </div>
            : 
            <>
                <Error />
            </>}
        </>
    )
}