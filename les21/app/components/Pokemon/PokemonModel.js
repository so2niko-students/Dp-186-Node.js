export class PokemonModel{
    pokemonMax = 807;
    link = `https://pokeapi.co/api/v2/pokemon/`;
    base = [];

    getRandomPokemon(){
        const id = Math.floor(Math.random() * this.pokemonMax + 1);
        return fetch(`${this.link}${id}`).then(r=>r.json()).then(data=>{
            this.base.unshift({
                id,
                name : data.name,
                photo : data.sprites.front_default
            });
            return this.base;
        });
        // return this.base;
    }
}