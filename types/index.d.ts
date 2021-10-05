declare type Fact = {
    _id: number,
    fact: string,
    tags: string[]
};
declare type AnimeWaifu = {
    _id: number,
    images: string[],
    names: Map<string, string>,
    from: Map<string, string>,
    statistics: Map<string, number>
};
declare type AnimeQuote = {
    _id: number,
    quote: string,
    anime: string,
    said: string
};
type Password = {
    pass: string,
};
export declare class AnimeFact {
    constructor(token: string);
    getFact(maxLength?: number, minLength?: number, tags?: string[], matchAll?: boolean): Promise<Fact>;
    getFactByID(id: number): Promise<Fact>;
    generatePassword(): Promise<Password>;
    getQuote(): Promise<AnimeQuote>;
    getWaifu(): Promise<AnimeWaifu>;
}