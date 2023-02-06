import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMissions } from '../redux/mission/Misson';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          dispatch(addMissions(data));
        });
    }
  }, [dispatch, missions.length]);
import React from 'react';

  return (
    <div>
      <h2>Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
      <h1> HELLO MISSIONS</h1>

    </div>
  );
}
