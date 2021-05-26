import GitHubIcon from "@material-ui/icons/GitHub";

import { ProjectCard } from "../styles/Components";

const Card = ({ img, title, link, git, text }) => {
  return (
    <ProjectCard className="card">
      <div className="content shadow-inner">
        <div
          className="front"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="back">
          <a href={link} target="_blank" rel="noopener noreferrer" className="mb-2">
            {title}
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
          <p className="text-lg pt-4">created with</p>
          <p>{text}</p>
        </div>
      </div>
    </ProjectCard>
  );
};

export default Card;
