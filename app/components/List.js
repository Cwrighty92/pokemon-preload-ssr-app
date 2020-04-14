import React from "react";

function List({ pokemon, location }) {
  const { ability } = location.match.params;
  return (
    <div>
      <h3>{ability}</h3>
      <ul>
        {pokemon.map((poke) => {
          const { pokemon } = poke;
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
