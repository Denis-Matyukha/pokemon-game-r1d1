import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAC-qjhzT6dPLAm355eE6dx2ZAA8bLX-O8",
    authDomain: "react-marathon-pokemon-game.firebaseapp.com",
    databaseURL: "https://react-marathon-pokemon-game-default-rtdb.firebaseio.com",
    projectId: "react-marathon-pokemon-game",
    storageBucket: "react-marathon-pokemon-game.appspot.com",
    messagingSenderId: "55132643823",
    appId: "1:55132643823:web:1122da5dbe19599bc7961a"
};

firebase.initializeApp(firebaseConfig);

class Firebase {

    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            console.log(`THE_getPokemonSoket_is_totally_ON_!`);
            cb(snapshot.val());
        });
    }

    getPokemonsViaDataBase = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    addPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addRandomPokemon = (cb = () => {console.log(`empty CallBack`);}) => {
            const getRandom = n => Math.ceil(Math.random() * n);
            const newKey = this.database.ref().child('pokemons').push().key;
            const getNewPokemon = () => {
                return {
                    "abilities": [
                        "keen-eye",
                        "tangled-feet",
                        "big-pecks"
                    ],
                    "base_experience": getRandom(1000),
                    "height": getRandom(100),
                    "weight": getRandom(1000),
                    "id": getRandom(100),
                    "img": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getRandom(1000)}.png`,
                    "name": "Random",
                    "stats": {
                        "hp": getRandom(100),
                        "attack": getRandom(100),
                        "defense": getRandom(100),
                        "special-attack": getRandom(100),
                        "special-defense": getRandom(100),
                        "speed": getRandom(100)
                    },
                    "type": "normal",
                    "values": {
                        "top": getRandom(10),
                        "right": getRandom(10),
                        "bottom": getRandom(10),
                        "left": getRandom(10)
                    }
                }
            };
            let data = getNewPokemon();
    
            this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
    }
}

// export const fire = firebase;

// export const database = fire.database();

// export default database;

export default Firebase;