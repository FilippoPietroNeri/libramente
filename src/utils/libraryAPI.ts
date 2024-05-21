import Logger from "./Logger";

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
            this.logger.debug(`getBookShelfById ${endpoints}; payload ${undefined}`)
            return await fetch(`${endpoints}/api/BookShelf/`, { headers: this.headers })
                .then((a) => resolve(a.json()))
                .catch(reject);
        })
    }

    public async getBookShelfById(id: number): Promise<any> { // GET
        return new Promise(async (resolve, reject) => {
            const endpoints = (await libAPI.getEndpoint()).href;
            this.logger.debug(`getBookShelfById ${endpoints}; payload ${id}`)
            return await fetch(`${endpoints}/api/BookShelf/${id}`, { headers: this.headers })
                .then((a) => resolve(a.json()))
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