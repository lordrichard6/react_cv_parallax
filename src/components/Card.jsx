import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/cards.css";

const Card = ({ img, title, link, git, date, text }) => {
  return (
    <div className="card h-80 w-60 min-w-max mx-4 my-4">
      <div className="content">
        <div
          className="front flex flex-wrap justify-center content-center bg-cover bg-bottom"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="back text-white text-2xl flex flex-col justify-center flex-wrap content-center">
          <a href={link} target="_blank" rel="noopener noreferrer" className="mb-2">
            {title}
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
