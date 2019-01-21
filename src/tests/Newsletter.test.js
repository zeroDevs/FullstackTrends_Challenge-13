import { shallow } from 'enzyme';
import React from 'react';
import Newsletter from '../components/Newsletter/Newsletter';

it('expect to render Newsletter component', () => {
	expect(shallow(<Newsletter />)).toMatchSnapshot();
})