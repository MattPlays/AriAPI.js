const {create} = require("axios").default;
const AnimeFact = require("./AnimeFact");
const AnimeQuote = require("./AnimeQuote");
const AnimeWaifu = require("./AnimeWaifu");
const PrettyError = require("pretty-error");
let pe = new PrettyError();
pe.start()
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
        }).catch((err) => {throw pe.render(err)});
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
        }).catch((err) => {throw pe.render(err)});
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
        }).catch((err) => {throw pe.render(err)})
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
        }).catch((err) => {throw pe.render(err)});
    }
    /**
     * Returns a random gif of the desired endpoint
     * @param {"Angry" | "Baka" | "Bite" | "Blush" | "Bonk" | "Bored" | "Bully" | "Bye" | "Chase" | "Cheer" | "Cringe" | "Cry" | "Cuddle" | "Dab" | "Dance" | "Die" | "Disgust" | "Facepalm" | "Feed" | "Glomp" | "Happy" | "Hi" | "Highfive" | "Hold" | "Hug" | "Kick" | "Kill" | "Kiss" | "Laugh" | "Lick" | "Love" | "Lurk" | "Midfing" | "Nervous" | "Nom" | "Nope" | "Nuzzle" | "Panic" | "Pat" | "Peck" | "Poke" | "Pout" | "Punch" | "Run" | "Sad" | "Shoot" | "Shrug" | "Sip" | "Slap" | "Sleepy" | "Smile" | "Smug" | "Stab" | "Stare" | "Suicide" | "Tease" | "Think" | "Thumbsup" | "Tickle" | "Triggered" | "wag" | "Wave" | "Wink" | "Yes"} type 
     * @returns {Promise<{url: string}>}
     */
    async getGif(type) {
        if(!type) return pe.render(new Error("Must input a valid type."));
        return _instance({
            url: `/${type}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw pe.render(err)})
    }
}
module.exports = AriAPI;