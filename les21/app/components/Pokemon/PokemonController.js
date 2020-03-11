import {PokemonModel} from '/app/components/Pokemon/PokemonModel.js';
import {PokemonView} from './PokemonView.js';

export class PokemonController{
    constructor(){
        this.model = new PokemonModel();
        // this.view = new PokemonView(this.handleClickRandomPokemon); // problem with context
        this.view = new PokemonView(this.handleClickRandomPokemon.bind(this)); // bind context
        // this.view = new PokemonView(()=>this.handleClickRandomPokemon());
        // function(){
        //     this.handleClickRandomPokemon();
        // }
        
        // this.view = new PokemonView(this.handleClickRandomPokemon);
    }

    // handleClickRandomPokemon = ()=>{
        
    handleClickRandomPokemon(){
        this.model.getRandomPokemon().then(arr => this.view.renderPokemons(arr));
    }
}