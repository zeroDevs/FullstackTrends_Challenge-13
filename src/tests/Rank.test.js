import React from 'react';
import { shallow } from 'enzyme';

import Rank from '../components/Rank/Rank';

const onTopicClick = jest.fn(() => false);
const onTopicClick2 = jest.fn(() => true);

describe('<Rank />', () => {
  it('Should render a div', () => {
    const arr = ['react', 'html', 'node'];

    const wrapper = shallow(<Rank langArray={arr} />);
    expect(wrapper.find('div').first().length).toBe(1);
  });

  it('Should render all inputs from the array', () => {
    const arr = ['react', 'html', 'node'];

    const wrapper = shallow(<Rank langArray={arr} />);
    expect(wrapper.find('input').length).toBe(arr.length);
  });

  it('Should hava a default checked input', () => {
    const arr = ['react', 'html', 'node'];

    const wrapper = shallow(<Rank langArray={arr} />);
    expect(wrapper.find('#react').prop('defaultChecked')).toBe(true);
  });

  it('Should check and uncheck input element', () => {
    const arr = ['react', 'html', 'node'];

    const wrapper = shallow(<Rank langArray={arr} onTopicClick={onTopicClick} />);
    const wrapper2 = shallow(<Rank langArray={arr} onTopicClick={onTopicClick2} />);
    // wrapper.find('#react').simulate('change', { target: { defaultChecked: false } });

    
    wrapper.find('input').forEach((node, i) => {
      if (i === 0) {
        expect(node.prop('onChange')({ currentTarget: { defaultChecked: false } })).toBe(false);
      }
    });

    wrapper2.find('input').forEach((node, i) => {
      if (i !== 0) {
        expect(node.prop('onChange')({ currentTarget: { defaultChecked: true } })).toBe(true);
      }
    });
  });
});
