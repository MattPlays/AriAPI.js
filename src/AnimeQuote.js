class AnimeQuote {
    /**
     * 
     * @param {number} _id - unique identifier
     * @param {string} quote - The quote
     * @param {string} anime - The anime name of the quote
     * @param {string} said - The person who said the quote
     */
    constructor(_id, quote, anime, said) {
        this._id = _id;
        this.quote = quote;
        this.anime = anime;
        this.said = said;
    }
}
module.exports = AnimeQuote;