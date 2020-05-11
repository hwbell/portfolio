import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// react router context
// import { MemoryRouter } from 'react-router-dom';

describe('Base Component', () => {

  let wrapper;
  let someProps;
  beforeEach(() => {
    someProps = {

    }

    wrapper = mount(
      // only need the MemoryRouter if there are links to routes of the react-router in the component that we need to test
      // <MemoryRouter>
      <Base {...someProps} />
      // </MemoryRouter>
    );

  })

  // tests
  it('renders without crashing', async () => {
    wrapper.update();
  });

  it('renders correctly', async () => {
    const tree = await renderer
      .create(<Base {...someProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the correct elements for different data', () => {
    console.log(wrapper)

    expect(wrapper.find('.container').length).toEqual(1);
  })

  // it('should render all buttons with info from provided props.buttons', () => {
  //   expect(wrapper.find('Link').at(0).props().to).toBe(someProps.buttons[0].link)
  //   expect(wrapper.find('Link').at(1).props().to).toBe(someProps.buttons[1].link)
  //   expect(wrapper.find('Link').at(2).props().to).toBe(someProps.buttons[2].link)

  // })
})