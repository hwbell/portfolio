import React from 'react';
import ReactDOM from 'react-dom';
import SocialIcons from './SocialIcons';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// react router context
// import { MemoryRouter } from 'react-router-dom';

describe('SocialIcons Component', () => {

  let wrapper;
  let someProps;
  beforeEach(() => {
    someProps = {

    }

    wrapper = shallow(
      // we only need the MemoryRouter if there are links to routes of the react-router(pages) in the component that we need to test
      // <MemoryRouter>
      <SocialIcons {...someProps} />
      // </MemoryRouter>
    );

  })

  // tests
  it('renders without crashing', async () => {
    wrapper.update();
  });

  it('renders correctly', async () => {
    const tree = await renderer
      .create(<SocialIcons {...someProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the correct elements for different data', () => {
    expect(wrapper.find('.social-icons').length).toEqual(1);
    expect(wrapper.find('.animated-icon').length).toEqual(5);
  })

  // it('calls click event', () => {
  //   const FakeFun = jest.spyOn(SocialIcons.prototype, 'renderIcons');
  //   const newWrapper = shallow((<SocialIcons />));
  //   newWrapper.update();
  //   expect(FakeFun).toHaveBeenCalled();
  // });

  // it('should render all buttons with info from provided props.buttons', () => {
  //   expect(wrapper.find('Link').at(0).props().to).toBe(someProps.buttons[0].link)
  //   expect(wrapper.find('Link').at(1).props().to).toBe(someProps.buttons[1].link)
  //   expect(wrapper.find('Link').at(2).props().to).toBe(someProps.buttons[2].link)

  // })
})