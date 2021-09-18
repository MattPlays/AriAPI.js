class AnimeWaifu {
    /**
     * 
     * @param {number} _id 
     * @param {string[]} images - The images
     * @param {Map<string, string>} names - Object of names in japanese, english and alt
     * @param {Map<string, string>} from - Object of anime names it belongs from
     * @param {Map<string, number>} statistics - Object of stats
     */
    constructor(_id, images, names, from, statistics) {
        this._id = _id;
        this.images = images;
        this.names = names;
        this.from = from;
        this.statistics = statistics;
    }
}
module.exports = AnimeWaifu;