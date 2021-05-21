import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/cards.css";

const Card = ({ img, title, link, git, text }) => {
  return (
    <div className="card h-80 w-60 min-w-max 2xl:w-80 2xl:h-96 m-4">
      <div className="content shadow-inner">
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
          <p className="text-lg pt-4">created with</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
