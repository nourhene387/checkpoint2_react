import React from 'react';
import Player from './palyerscard';
import players from '../database/players'

const PlayersList = () => {
  return (

          <div className="container mx-auto px-4 py-8">

            <div className="grid  g-1 md:g-2 lg:g-4 x gap-6 justify-items-center align-items-center">
              {players.map((player) => (
                <Player key={player.name} {...player} />
              ))}
            </div>
          </div>


       
  );
};

export default PlayersList;