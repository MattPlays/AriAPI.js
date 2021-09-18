class AnimeFact {
    /**
     * 
     * @param {number} _id 
     * @param {string} fact 
     * @param {string[]} tags 
     */
    constructor(_id, fact, tags) {
        this._id = _id;
        this.fact = fact;
        this.tags = tags;
    }
}
module.exports = AnimeFact;