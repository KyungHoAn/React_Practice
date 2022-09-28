import React, {Component} from "react";
import cookie from 'react-cookies';

class R085_CookieSave extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() +60)
        cookie.save('userid', "react200",{
            path: '/',
            expires,
        })
    }

    render() {
        return(
            <>
            <h3>react-cookies Save</h3>
            </>
        )
    }
}

export default R085_CookieSave;