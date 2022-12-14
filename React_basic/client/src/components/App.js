import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import reactThrottle from './R095_reactThrottle';
import reactProxy from './R109_reactProxy';
import ApiGetJson from './R110_ApiGetJson';
import ApiPostJson from './R111_ApiPostJson';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart';
import floatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart';
import floatingPopulationBarChart from './Floating_population/floatingPopulationBarChart';
import floatingPopulationComposedChart from './Floating_population/floatingPopulationComposedChart';
import floatingPopulationScatterChart from './Floating_population/floatingPopulationScatterChart';
import SoftwareList from './SoftwareToolsManage/SoftwareList';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList}/>
        <Route exact path='/Throttle' component={reactThrottle} />
        <Route exact path='/reactProxy' component={reactProxy} />
        <Route exact path='/ApiGetJson' component={ApiGetJson}/>
        <Route exact path='/ApiPostJson' component={ApiPostJson}/>
        <Route path='/floatPopulationList' component={floatingPopulationList} />
        <Route path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart} />
        <Route path='/floatingPopulationListChart' component={floatingPopulationListChart} />
        <Route path='/floatingPopulationAreaChart' component={floatingPopulationAreaChart} />
        <Route path='/floatingPopulationBarChart' component={floatingPopulationBarChart} />
        <Route path='/floatingPopulationComposedChart' component={floatingPopulationComposedChart} />
        <Route path='/floatingPopulationScatterChart' component={floatingPopulationScatterChart} />
        <Footer/>
      </div>
    );
  }
}

export default App;