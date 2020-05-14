import React from 'react';
import ReactDOM from 'react-dom';
import ToolIcons from './ToolIcons';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// react router context
// import { MemoryRouter } from 'react-router-dom';

describe('ToolIcons Component', () => {

  let wrapper;
  let someProps;
  beforeEach(() => {
    someProps = {
      year: "2010",
      job: "Research Associate at Brandeis University",
      tools: [ "matlab", "dna", "microscope"],
      logo: require("../../assets/icons/brandeis.png"),
      modal: {
        title: "Research Associate at Brandeis University",
        bullets: [
          'Developed image analysis software tools to streamline collection and processing of experimental data.',
          'Managed development of experimental methods and data analysis.',
          'Managed daily operations of research laboratory.',
        ],
        description: `At Brandeis University, I was an integral part of a team of researchers dissecting the cellular and genetic mechanisms of neuronal communication and memory storage. During my time in Dr. Pial Sengupta's laboratory, I was a leading member of the 'Thermotaxis' group, which studied temperature sensation in individual neurons as well as networks. I developed many analysis tools with the technical computing software MATLAB to help the team analyze data more efficiently and accurately. I also managed the day to day operations of the lab.` 
      }
    }

    wrapper = shallow(
      // we only need the MemoryRouter if there are links to routes of the react-router(pages) in the component that we need to test
      // <MemoryRouter>
      <ToolIcons {...someProps} />
      // </MemoryRouter>
    );

  })

  // tests
  it('renders without crashing', async () => {
    wrapper.update();
  });

  it('renders correctly', async () => {
    const tree = await renderer
      .create(<ToolIcons {...someProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the correct elements for different data', () => {
    expect(wrapper.find('.tool-icons').length).toEqual(1);
    expect(wrapper.find('.tool-image').length).toEqual(3);
  })

  // it('calls click event', () => {
  //   const FakeFun = jest.spyOn(ToolIcons.prototype, 'renderIcons');
  //   const newWrapper = shallow((<ToolIcons />));
  //   newWrapper.update();
  //   expect(FakeFun).toHaveBeenCalled();
  // });

  // it('should render all buttons with info from provided props.buttons', () => {
  //   expect(wrapper.find('Link').at(0).props().to).toBe(someProps.buttons[0].link)
  //   expect(wrapper.find('Link').at(1).props().to).toBe(someProps.buttons[1].link)
  //   expect(wrapper.find('Link').at(2).props().to).toBe(someProps.buttons[2].link)

  // })
})