import React from 'react';
import renderer from 'react-test-renderer';
import {Tabs} from './tabs';
import {BrowserRouter as Router} from 'react-router-dom';

const TEST_TABS = [`tab 1`, `tab 2`];
const currentTab = TEST_TABS[0];

const onTabClick = () => {};

it(`Tabs renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Tabs
            tabs={TEST_TABS}
            active={currentTab}
            onTabClick={onTabClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

