// CommonJS (Node.js)

// User.js
console.log('Hallo Welt'); // das passiert nur beim ersten require (wegen module cache)
module.exports = class User {};

// index.js
const User = require('./User');

// relativer oder absoluter pfad = eigene Dateien
// kein Pfad z.B. require('fs') = Kernmodul oder NPM

// ECMAScript Modulsystem

// default exporte (nur 1x pro datei)
// User.js
export default class User {}

// index.js
import User from './User';
import Gummibärchen from './User'; // der name kann bei einem default export beliebig gewählt werden

// named exporte (beliebig viele pro datei)

// User.js
export class User {}

// index.js
import { User } from './User';
