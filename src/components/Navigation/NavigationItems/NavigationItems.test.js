import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapther from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavtigationItem from './NavigationItem/NavigationItem';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapther() });

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavtigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavtigationItem)).toHaveLength(2);
    });

    it('should render three <NavtigationItem /> elements if authenticated', () => {
        //wrapper = shallow(<NavigationItems authenticated />);
        wrapper.setProps({ authenticated: true });
        expect(wrapper.find(NavtigationItem)).toHaveLength(3);
    });

    it('should contains logout link if authenticated', () => {
        wrapper.setProps({ authenticated: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});