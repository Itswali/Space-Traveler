import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRockets } from '../redux/rockets/Rockets';

const Rocket = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsData && rocketsData.length === 0) {
      fetch('https://api.spacexdata.com/v3/rockets')
        .then((data) => {
          dispatch(addRockets(data));
        })
        .then((res) => res.json())
        .then((data) => {
          const selectedData = data.map((rocket) => ({
            id: rocket.id,
            rocket_name: rocket.rocket_name,
            description: rocket.description,
            flickr_images: rocket.flickr_images,
          }));
          dispatch(addRockets(selectedData));
        });
    }
  }, [dispatch, rocketsData]);

  return (
    <div>
      {rocketsData && rocketsData.length > 0
        ? rocketsData.map((rocket) => (
          <div key={rocket.id}>
            <p>
              Name:
              {rocket.rocket_name}
            </p>
            <p>
              Description:
              {rocket.description}
            </p>
            <p>
              Images:
              {rocket.flickr_images.join(', ')}
            </p>
          </div>
        ))
        : <p>Loading...</p>}
    </div>
  );
};

export default Rocket;