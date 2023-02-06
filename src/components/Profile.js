import React from 'react';
import { useSelector } from 'react-redux';
import '../style/style.scss';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="profile-mission-container">
        <div className="profile-mission-list-container">
          <h3 className="profile-mission-list-title">Joined Missions:</h3>
          <ul className="profile-mission-list">
            {joinedMissions.map((mission) => (
              <li className="profile-mission-item" key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
