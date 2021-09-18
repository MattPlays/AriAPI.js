const {create} = require("axios").default;
const AnimeFact = require("./AnimeFact");
const AnimeQuote = require("./AnimeQuote");
const AnimeWaifu = require("./AnimeWaifu");
let _instance;
class AriAPI {
    /**
     * 
     * @param {string} token - Your Authorization Token - [Need One?](https://docs.airi.kyoyo.me/#frequently-asked-questions-faqs) 
     */
    constructor(token) {
        _instance = create({
            method: "GET",
            baseURL: "https://airi.kyoyo.me/api",
            headers: {
                "Auth": token,
                "Accept": "application/json"
            },
        })
    }
    /**
     * Returns a single random fact from the database
     * @param {number} [maxLength] - The maximum Length in characters (can be combined with `minLength`)
     * @param {number} [minLength] The minimum Length in characters (can be combined with `maxLength`)
     * @param {string[]} [tags] - Filter random fact by tag(s). Takes a list of one or more tag names
     * @param {boolean} [matchAll] - Does the fact have to match **All** of the provided tags? `true` by *default*
     * @returns {Promise<AnimeFact>}
     */
    async getFact(maxLength, minLength, tags, matchAll = true) {
        return _instance({
            url: "/fact",
            params: {
                "maxLength": maxLength || "",
                "minLength": minLength || "",
                "tags": (tags) ? (matchAll) ? encodeURI(tags.join(",")) : encodeURI(tags.join("|")) : ""
            }
        }).then(({data}) => {
            return new AnimeFact(data._id, data.fact, data.tags)
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * Get a paginated list of all facts. This method supports several filter and sorting options.
     * @param {number} [limit] - The number of facts to return per request. (for pagination). `Min: 1 Max: 100 Default: 20`
     * @param {number} [skip] - The number of items to skip (for pagination). `Min: 0 Default: 0`
     * @param {string[]} [tags] - Filter facts by tag(s). Takes a list of one or more tag names.
     * @param {boolean} [matchAll] - Does the fact have to match **All** of the provided tags? `true` by *default*
     * @returns {Promise<{lastIndex: number, resultsCount: number, totalCount: number, results: AnimeFact[]}>}
     */
    async getFacts(limit = 20, skip = 0, tags, matchAll = true) {
        return _instance({
            url: "/fact",
            params: {
                "limit": limit,
                "skip": skip,
                "tags": (tags) ? (matchAll) ? encodeURI(tags.join(",")) : encodeURI(tags.join("|")) : ""
            }
        }).then(({data}) => {
           return {
                lastIndex: data.lastIndex,
                resultsCount: data.resultsCount,
                totalCount: data.totalCount,
                results: data.results.map((res) => {return new AnimeFact(res._id, res.fact, res.tags)})
            };
        }).catch(err => {throw new Error(err)})
    }
    /**
     * Get a fact by its ID
     * @param {number} id - The fact ID
     * @returns {Promise<AnimeFact>}
     */
    async GetFactByID(id) {
        return _instance({
            url: `/facts/${id}`
        }).then(({data}) => {
            return new AnimeFact(data._id || id, data.fact, data.tags);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * Generates a random password
     * @returns {Promise<{pass: string}>}
     */
    async generatePassword() {
        return _instance({
            url: "/password"
        }).then(({data}) => {
            return data
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * Returns a single random anime quote
     * @returns {Promise<AnimeQuote>}
     */
    async getQuote() {
        return _instance({
            url: "/quote"
        }).then(({data}) => {
            return new AnimeQuote(data._id, data.quote, data.anime, data.said);
        }).catch((err) => {throw new Error(err)})
    }
    /**
     * Returns a single random waifu from the database
     * @returns {Promise<AnimeWaifu>}
     */
    async getWaifu() {
        return _instance({
            url: "/waifu"
        }).then(({data}) => {
            return new AnimeWaifu(data._id, data.images, data.names, data.from, data.statistics);
        }).catch((err) => {throw new Error(err)});
    }
}
module.exports = AriAPI;