import React,{Component} from "react";
import cookie from 'react-cookies';

class R086_cookieLoad extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes()+60)
        cookie.save('userid','react200',{
            path:'/',
            expires,
        })
        setTimeout(function() {
            alert(cookie.lead('userid'))
        }, 1000);
    }

    render() {
        return(
            <>
            <h3>react-cookies Load</h3>
            </>
        )
    }
}

export default R086_cookieLoad