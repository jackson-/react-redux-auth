import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import './App.css';


class App extends Component {

  componentWillMount(){
    console.log("TOKEN", localStorage.getItem('token'))
    if(!localStorage.getItem('token')){
      this.context.router.push('/login')
    }
    // if((Date.now() - localStorage.getItem('timestamp')) > 1000*60*3){
    //   localStorage.removeItem('timestamp')
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('email')
    //   this.context.router.push('/login')
    // }
  }

  render() {
    console.log("APP PROPS", this.props)
    return (
      <div>
        <Header />
        {
          React.cloneElement(this.props.children, {...this.props, router:this.context.router})
          }
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, () => ({}))(App);
