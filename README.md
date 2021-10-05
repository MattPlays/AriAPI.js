# AriAPI.js
 
**Powered By [Animu](https://animu.ml/)**

*Note*: This is **not** an official wrapper for this API

## First make sure you have a [Animu](https://animu.ml/) API Token. Join [*this*](https://discord.gg/yyW389c) discord server to get one.

## Installation
```bash
npm i ariapi.js
```

## Usage
```javascript
const AriAPI = require("ariapi.js");
const API = new AriAPI("<YOUR_ARIAPI_TOKEN>");
```

## Questions about How to use the functions?
Please refer to the **documentation** provided by [Animu](https://docs.airi.kyoyo.me) for more detailed information.

Function parameters are *1:1* except for the following:

`getFact`: has an additional **matchAll** parameter which if true will seperate tags by a comma which makes the result tags match only what was provided, if false only **`1`** of the tags provided has to be in the results tag.

### Any other questions can be directed to me in an [issue](https://github.com/MattPlays/AriAPI.js/issues) on github.


# License
AriAPI.js is Licensed by the [AGPL-3.0 License](https://github.com/MattPlays/AriAPI.js/blob/main/LICENSE)

All data returned from this package is rightfully owned by [Animu](https://animu.ml/) and its respected sources, due to this fact I am in under **no obligation** to answer any questions about the data returned.