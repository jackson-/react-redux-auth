import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

const mapStateToProps = state => ({
  appName:state.common.appName,
  status:state.auth.status
})

class App extends Component {

  componentWillMount(){
    console.log("TOKEN", localStorage.getItem('token'))
    if(!localStorage.getItem('token')){
      this.context.router.push('/login')
    }
    if((Date.now() - localStorage.getItem('timestamp')) > 1000*60*3){
      localStorage.removeItem('timestamp')
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.context.router.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);
