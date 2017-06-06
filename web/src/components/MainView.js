import ProjectList from './ProjectList';
import React from 'react';

const MainView = ({projects}) => {
  //console.log("MAINVIEW", props)
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

        <li className="nav-item">
          <a
            href=""
            className="nav-link active">
            Global Feed
          </a>
        </li>

        </ul>
      </div>

      <ProjectList
        projects={projects} />
    </div>
  )
}
export default MainView;
