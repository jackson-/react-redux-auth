import React from 'react';
import ProjectPreview from './ProjectPreview';
const ProjectList = props => {
  console.log("RENDER PROJECTS", props)
  if (!props.projects) {
    return (
      <div className="project-preview">Loading...</div>
    );
  }

  if (props.projects.length === 0) {
    return (
      <div className="article-preview">
        No projects are here... yet.
      </div>
    );
  }
  debugger;
  return (
    <div>
      {
        props.projects.map((project, i) => {
          console.log(i)
          return (
            <ProjectPreview key={i} article={project} />
          );
        })
      }
    </div>
  );
};

export default ProjectList;
