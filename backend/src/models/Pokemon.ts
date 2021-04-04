import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("pokemons")
class Pokemon {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    numberPokemon: number;

    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Pokemon }