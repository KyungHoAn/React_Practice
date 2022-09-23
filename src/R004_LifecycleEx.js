// import { render } from '@testing-library/react/types';
import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS RENDER FUNTION]</h2>
        )
    }
}

export default R004_LifecycleEx;