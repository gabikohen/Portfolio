import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode1 && (
      <a
        href={project.sourceCode1}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

{project.sourceCode2 && (
      <a
        href={project.sourceCode2}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview1 && (
      <a
        href={project.livePreview1}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

   {project.livePreview2 && (
      <a
        href={project.livePreview2}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
