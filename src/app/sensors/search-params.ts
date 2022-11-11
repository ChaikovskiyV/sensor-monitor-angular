export class SearchParams {
    constructor(private _page:number, private _limit:number, private _search:string) {}

    public set page(page:number) {
        this._page = page;
    }

    public get page() {
        return this._page;
    }

    public set limit(limit:number) {
        this._limit = limit;
    }

    public get limit() {
        return this._limit;
    }

    public set search(search:string) {
        this._search = search;
    }

    public get search() {
        return this._search;
    }
}