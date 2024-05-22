'use client';

import ErrorIcon from '@/components/icons/Error';
import SuccessIcon from '@/components/icons/Success';
import libAPI from '@/utils/libraryAPI';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function AddBook() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const searchParams = useSearchParams()
    const genreId = searchParams.get('genreId');
    const genreName = searchParams.get('genreName');
    const test = new libAPI();
    const [genres, setGenres] = useState([]);
    const [book, setBook] = useState({
        id: getRandomInt(999),
        title: '',
        price: '',
        isOut: true,
        isbn: '',
        genreId: genreId ? parseInt(genreId) : '',
        shelfId: 1,
        genreName: genreName ? genreName : ''
    });

    useEffect(() => {
        setSuccess("");
        setError("");
        const fetchData = async () => {
            await test.getGenres().then((a) => {
                setGenres(a);
            }).catch(err => {
                setError('Unknown Error')
            })
        }
        fetchData();
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        setSuccess("");
        setError("");
        e.preventDefault();
        console.log('Book added:', book);
        // @ts-ignore
        await test.addNewBook(book).then((a) => {
            console.log(a)
            setSuccess('Hai aggiunto con successo il libro!')
        }).catch((err) => {
            console.error(err);
            setError('Impossibile aggiungere questo libro!')
        });
    };

    const generateISBN13 = () => {
        let isbn = '978';
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const digit = Math.floor(Math.random() * 10);
            isbn += digit;
            sum += digit * (i % 2 === 0 ? 1 : 3);
        }
        let checkDigit = (10 - (sum % 10)) % 10;
        isbn += checkDigit;
        setBook({ ...book, isbn });
    };

    return (
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
                        value={book.isbn}
                        onChange={handleChange}
                    />
                    <button type="button" className="btn btn-secondary mt-2" onClick={generateISBN13}>Generate ISBN</button>
                </div>
                <div className="form-control mb-4">
                    <label className="label" htmlFor="genreId">Genre Id</label>
                    <select
                        className="select select-bordered"
                        id="genreId"
                        name="genreId"
                        disabled={genreId ? true : false}
                        value={genreId ? genreId : book.genreId}
                        onChange={handleChange}
                    >
                        <option value="">Seleziona un genere</option>
                        {genres.map((genre: any) => (
                            <option key={genre.genreId} value={genre.genreId}>{genre.description}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control mb-4">
                    <label className="label" htmlFor="genreName">Genre Name</label>
                    <input
                        className="select select-bordered"
                        id="genreName"
                        name="genreName"
                        disabled={genreName ? true : false}
                        value={genreName ? genreName : book.genreName}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Aggiungi Libro</button>
            </form>
        </div>
    );
}
