/* eslint-disable import/no-extraneous-dependencies */
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketCard from '../components/RocketCard';

describe('Render the ROcket Reservation Section ', () => {
  it('Renders all Section with rocket reservaton or cancelation', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <RocketCard />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});
