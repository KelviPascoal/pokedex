import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Pokemon } from '../models/Pokemon';

class PokemonController {

    async create(request: Request, response: Response) {

        const repository = getRepository(Pokemon);
        const { name, type, image, numberPokemon } = request.body;

        const pokemon = repository.create({ name, type, image, numberPokemon });

        const pokemonSaved = await repository.save(pokemon);

        return response.status(201).json(pokemonSaved)
    }

    async findAll(request: Request, response: Response) {

        const repository = getRepository(Pokemon);
        const pokemons = await repository.find();

        return response.status(200).json(pokemons);

    }

    async putPokemon(request: Request, response: Response) {
        const repository = getRepository(Pokemon);
        const { id } = request.params;
        const { name, type, image, numberPokemon } = request.body;
        const pokemon = await repository.findOne(id);
        pokemon.name = name;
        pokemon.type = type;
        pokemon.image = image;
        pokemon.numberPokemon = numberPokemon;
        const pokemonSave = await repository.save(pokemon);

        return response.status(200).json(pokemonSave);
    }

    async delete(request: Request, response: Response) {
        const repository = getRepository(Pokemon);
        const { id } = request.params
        await repository.delete(id)
        return response.status(204).json();
    }

    async findOne(request: Request, response: Response) {
        const repository = getRepository(Pokemon);
        const { id } = request.params;
        const pokemon = await repository.findOne(id);

        return response.status(200).json(pokemon);

    }



}

export { PokemonController };