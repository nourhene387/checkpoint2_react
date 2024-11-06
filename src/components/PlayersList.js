import React from 'react';
import Player from './palyerscard';
import players from '../database/players'

const PlayersList = () => {
  return (

          <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {players.map((player) => (
                <Player key={player.name} {...player} />
              ))}
            </div>
          </div>


       
  );
};

export default PlayersList;