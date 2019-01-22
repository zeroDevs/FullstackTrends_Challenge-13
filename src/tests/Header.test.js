import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/Header/Header';

it('expect to render Header component', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
})