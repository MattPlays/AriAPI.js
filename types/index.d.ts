import { AnimeFact } from "./AnimeFact";
import { AnimeQuote } from "./AnimeQuote";
import { AnimeWaifu } from "./AnimeWaifu";
export class AnimeFact {
    constructor(token: string);
    async getFact(maxLength?: number, minLength?: number, tags?: string[], matchAll?: boolean): Promise<AnimeFact>;
    async getFacts(limit: number, skip: number, tags: string[], matchAll: boolean): Promise<{lastIndex: number, resultsCount: number, totalCount: number, results: AnimeFact[]}>;
    async getFactByID(id: number): Promise<AnimeFact>;
    async generatePassword(): Promise<{pass: string}>;
    async getQuote(): Promise<AnimeQuote>;
    async getWaifu(): Promise<AnimeWaifu>;
}