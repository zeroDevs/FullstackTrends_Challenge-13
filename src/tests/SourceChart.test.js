import { shallow } from 'enzyme';
import React from 'react';
import SourceChart from '../components/Data/SourceChart';

it('expect to render SourceChart component', () => {
	expect(shallow(<SourceChart />)).toMatchSnapshot();
})