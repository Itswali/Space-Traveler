import React from 'react';
import { Container } from 'react-bootstrap';
import RocketCard from './RocketCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addRockets } from '../redux/rockets/Rockets';

const RocketList = () => {
  const rocketsData = [
    {
      id: 1,
      rocket_name: 'Falcon 1',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
    },
  ];
  // const dispatch = useDispatch();
  // const rocketsData = useSelector((state) => state.rockets);

  // useEffect(() => {
  //   if (rocketsData && rocketsData.length === 0) {
  //     fetch('https://api.spacexdata.com/v3/rockets')
  //       .then((data) => {
  //         dispatch(addRockets(data));
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const selectedData = data.map((rocket) => ({
  //           id: rocket.id,
  //           rocket_name: rocket.rocket_name,
  //           description: rocket.description,
  //           flickr_images: rocket.flickr_images,
  //         }));
  //         dispatch(addRockets(selectedData));
  //       });
  //   }
  // }, [dispatch, rocketsData]);

  return (
    <Container>
      {rocketsData.map((rocket) => (
        <RocketCard
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          imgUrl={rocket.flickr_images[0]}
          description={rocket.description}
        />
      ))}
    </Container>
  );
};

export default RocketList;
