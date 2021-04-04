import { Router } from 'express';
import { PokemonController } from './controllers/PokemonController';

const router = Router();
const pokemonController = new PokemonController();

router.post("/pokemons", pokemonController.create);

router.get("/pokemons", pokemonController.findAll);

router.get("/pokemons/:id", pokemonController.findOne);

router.delete("/pokemons/:id", pokemonController.delete);

router.put("/pokemons/:id", pokemonController.putPokemon);

export { router };