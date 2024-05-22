import Logger from "./Logger";

interface BookData {
    "id": number,
    "title": string,
    "price": number,
    "isOut": boolean,
    "isbn": string,
    "genreId": number,
    "shelfId": number,
    "genreName": string
  }

export default class libAPI {
    private readonly logger = new Logger("LibAPI");
    private headers: Record<string, string>;

    constructor() {
        this.headers = {
            "accept": "application/json",
            "User-Agent": "LibraryManagement/1.0"
        }
    }

    public async getBookShelfs(): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfs ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/BookShelf/`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getGenreIdByGenreName(genreName: string): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfs ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Genre`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        for (let item of await res.json()) {
                            if (item.description.toLocaleLowerCase() === genreName.toLocaleLowerCase()) {
                                return item.genreId;
                            }
                        }
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async addNewBook(data: BookData): Promise<any> { // POST
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`Book ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Book`, { method: 'POST', headers: {
                "Content-Type": "application/json", // cuz is a POST
                ...this.headers
            }, body: JSON.stringify(data) })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        return {
                            "message": "Ok",
                            "status": 200
                        };
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getBooks(): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBooks ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Book/`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getBooksByGenre(genreName: string): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBooks ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Book/`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        for (let item of await res.json()) {
                            if (item.genreName.toLocaleLowerCase() === genreName.toLocaleLowerCase()) {
                                return item;
                            }
                        }
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getBookByName(bookName: string): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBooks ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Book/`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        const books = (await res.json()).filter((book: { genreName: string; }) => book.genreName === bookName );
                        this.logger.debug(books);
                        return books;
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }


    public async getGenres(): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfById ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/Genre/`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getBookShelfById(id: number): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfById ${endpoints}; payload ${id}`)
            return await fetch(`${endpoints}/api/BookShelf/${id}`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    public async getBookShelfByName(name: string): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfByName ${endpoints}; payload ${name}`)
            return await fetch(`${endpoints}/api/genre`, { headers: this.headers })
                .then(async (res) => {
                    if (res.headers.get("content-length") !== "0") {
                        if (!res.ok) return reject(res.json());
                        for (let item of await res.json()) {
                            if (item.description.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                                return item;
                            }
                        }
                        return res.json();
                    }
                })
                .then(resolve)
                .catch(reject);
        })
    }

    static async getEndpoint() {
        const knowns = await fetch('https://filippopietroneri.github.io/api/endpoints')
            .then((a) => a.json())
            .then((a) => new URL(a.api))
        return knowns
    }
}