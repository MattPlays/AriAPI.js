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
type GifTypes = "Angry" | "Baka" | "Bite" | "Blush" | "Bonk" | "Bored" | "Bully" | "Bye" | "Chase" | "Cheer" | "Cringe" | "Cry" | "Cuddle" | "Dab" | "Dance" | "Die" | "Disgust" | "Facepalm" | "Feed" | "Glomp" | "Happy" | "Hi" | "Highfive" | "Hold" | "Hug" | "Kick" | "Kill" | "Kiss" | "Laugh" | "Lick" | "Love" | "Lurk" | "Midfing" | "Nervous" | "Nom" | "Nope" | "Nuzzle" | "Panic" | "Pat" | "Peck" | "Poke" | "Pout" | "Punch" | "Run" | "Sad" | "Shoot" | "Shrug" | "Sip" | "Slap" | "Sleepy" | "Smile" | "Smug" | "Stab" | "Stare" | "Suicide" | "Tease" | "Think" | "Thumbsup" | "Tickle" | "Triggered" | "wag" | "Wave" | "Wink" | "Yes";
export declare class AnimeFact {
    constructor(token: string);
    getFact(maxLength?: number, minLength?: number, tags?: string[], matchAll?: boolean): Promise<Fact>;
    generatePassword(): Promise<Password>;
    getQuote(): Promise<AnimeQuote>;
    getWaifu(): Promise<AnimeWaifu>;
    getGif(type: GifTypes): Promise<{url: string}>;
}