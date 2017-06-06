import React from 'react';

const ProjectPreview = props => {
  const project = props.project;

  return (
    <div className="project-preview">
      <div className="project-meta">
        <a>
          <img alt='project_image' src={project.author.image} />
        </a>

        <div className="info">
          <a className="author">
            {project.author.username}
          </a>
          <span className="date">
            {new Date(project.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button
            className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {project.favoritesCount}
          </button>
        </div>
      </div>

      <a to={`project/${project.slug}`} className="preview-link">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {
            project.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
      </a>
    </div>
  );
}

export default ProjectPreview;
