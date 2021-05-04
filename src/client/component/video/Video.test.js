import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Video from './Video'

configure({
    adapter: new Adapter()
})

describe('Testing Component <Video />', () => {

    let component;

    const id = 'someId';
    const video = {
        title: 'Title Video',
        Description: 'Some description',
        createTimestamp: '9099029292982',
        url: 'https://www.google.com/some_path'
    };
    const handleClick = jest.fn();;

    beforeAll(() => {
        component = shallow(<Video id={id} video={video} handleClick={handleClick} />);
    });

    test('should Snapshot met', () => {
        expect(toJson(component)).toMatchSnapshot()
    });

    it('calls the onClick prop function when clicked', () => {
        expect(handleClick).not.toHaveBeenCalled();
        component.dive().find('#delete-btn').simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});