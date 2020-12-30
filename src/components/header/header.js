import React, {
    Component
} from 'react';
import {
    start
} from '../../common/ice-utils';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        start();
    }

    render() {
        return <div>header111</div>
    }
}

export default Header;