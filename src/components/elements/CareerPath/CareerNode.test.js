import React from 'react';
import ReactDOM from 'react-dom';
import CareerNode from './CareerNode';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { CareerPathText } from './CareerPathText';
// we'll use this obj as testing - CareerPathText[0]
// {
// year: "2010",
// job: "Brandeis University",
// tools: [ "matlab", "dna", "microscope"],
// logo: "./assets/someimage"
// }
// react router context
// import { MemoryRouter } from 'react-router-dom';

describe('CareerNode Component', () => {

  let wrapper;
  let someProps;
  beforeEach(() => {
    someProps = CareerPathText[0];

    wrapper = mount(
      // only need the MemoryRouter if there are links to routes of the react-router in the component that we need to test
      // <MemoryRouter>
      <CareerNode {...someProps} />
      // </MemoryRouter>
    );

  })

  // tests
  it('renders without crashing', async () => {
    wrapper.update();
  });

  it('renders correctly', async () => {
    const tree = await renderer
      .create(<CareerNode {...someProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the correct elements for different data', () => {
    console.log(wrapper)

    expect(wrapper.find('.career-node').length).toEqual(1);

    // the tools will only render with the open modal
    // // there are 3 tools. there should be 3 tool-image elements
    // expect(wrapper.find('.tool-image').length).toEqual(3);

    // wrapper.setProps({tools: ["matlab", "dna"]})
    // // now there are 2 tools. there should be 2 tool-image elements
    // expect(wrapper.find('.tool-image').length).toEqual(2);

    // wrapper.setProps({tools: ["matlab", "dna", "backend", "jira", "protein chemistry", "databases"]})
    // // now there are 6 tools. there should be 6 tool-image elements
    // expect(wrapper.find('.tool-image').length).toEqual(6);

    // // are the right elements showing the right data?
    // expect(wrapper.find('.tool-image').at(0).props().id).toEqual('BrandeisUniversity-tool0')
    // expect(wrapper.find('.tool-image').at(5).props().id).toEqual('BrandeisUniversity-tool5')

  });

  it('receives the props passes to it', () => {
    expect(wrapper.props().year).toEqual('2010');
    expect(wrapper.props().job).toEqual('Research Associate at Brandeis University');
    expect(wrapper.props().tools).toEqual(["matlab", "dna", "microscope"]);
    expect(wrapper.props().logo).toEqual("brandeis.png");
  });

  // it('should render all buttons with info from provided props.buttons', () => {
  //   expect(wrapper.find('Link').at(0).props().to).toBe(someProps.buttons[0].link)
  //   expect(wrapper.find('Link').at(1).props().to).toBe(someProps.buttons[1].link)
  //   expect(wrapper.find('Link').at(2).props().to).toBe(someProps.buttons[2].link)

  // })
})