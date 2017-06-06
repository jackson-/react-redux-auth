
import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import { connect } from 'react-redux';
import store from '../store'
import agent from '../agent';

const mapStateToProps = state => ({
  appName:state.common.appName,
  projects:state.home.projects
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    agent.Projects.all().then(data => {
      dispatch({ type: 'GET_PROJECTS', data: data.projects })
    })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad();
    // store.dispatch({ type: 'GET_PROJECTS' })
  }

  render() {
    console.log("RENDER HOME", this.props)
    return (
      <div className="home-page">

        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView projects={this.props.projects}/>
          </div>
        </div>

      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
