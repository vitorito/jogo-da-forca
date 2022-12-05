import React, { useContext, useMemo } from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import { MatchContext } from '../../../../providers/MatchProvider';
import Gallow from '../gallow/Gallow';

function WatchingPlayerView() {
  const { room, player } = useContext(MatchContext);
  const players = useMemo(
    () => room.players.filter((p) => p.id !== player.id && !p.isWatching),
    [room]
  );

  return (
    <ScrollableContainer className="lg:max-w-[90%] rounded-xl">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-xl">
        {players.map((p) => (
          <li
            key={p.id}
            className="bg-yellow-600/40 flex flex-col rounded shadow-sm shadow-black gap-2"
          >
            <div className="rounded-gray-bg w-fit h-fit max-w-[80%] px-6 py-0.5 mx-auto mt-4">
              <p className="text-xl text-center overflow-auto overflow-ellipsis">
                {p.nick}
              </p>
            </div>
            <Gallow player={p} className="gap-5 scale-75 -mt-7" />
          </li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default WatchingPlayerView;
