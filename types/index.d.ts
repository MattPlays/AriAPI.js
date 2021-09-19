type Fact = {
    _id: number,
    fact: string,
    tags: string[]
}
type AnimeWaifu = {
    _id: number,
    images: string[],
    names: Map<string, string>,
    from: Map<string, string>,
    statistics: Map<string, number>
}
type AnimeQuote = {
    _id: number,
    quote: string,
    anime: string,
    said: string
}
export class AnimeFact {
    constructor(token: string);
    getFact(maxLength?: number, minLength?: number, tags?: string[], matchAll?: boolean): Promise<Fact>;
    getFacts(limit: number, skip: number, tags: string[], matchAll: boolean): Promise<{lastIndex: number, resultsCount: number, totalCount: number, results: Fact[]}>;
    getFactByID(id: number): Promise<Fact>;
    generatePassword(): Promise<{pass: string}>;
    getQuote(): Promise<AnimeQuote>;
    getWaifu(): Promise<AnimeWaifu>;
}