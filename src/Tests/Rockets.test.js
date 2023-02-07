/* eslint-disable import/no-extraneous-dependencies */
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketList from '../components/Rockets';

describe('Render the missions list in profile page', () => {
  it('Renders all joined missions correctly into the profile page', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});
