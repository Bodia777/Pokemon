export class PokemonPreview {
    name: string;
    url: string;
    types?: any[] | string;
}

export class GetPokemon {
    count: number;
    next: string | null;
    previous: string | null;
    results: [PokemonPreview];
}

export class PokemonDetails {
    display: string;
    img: string;
    displayDetailsName: string;
    displayDetailsId: string;
    displayDetailsType: string | any[];
    attack: string;
    defense: string;
    hp: string;
    spAttack: string;
    spDefense: string;
    speed: string;
    weight: string;
    totalMoves: string;
}
