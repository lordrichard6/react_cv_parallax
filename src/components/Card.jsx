import "../styles/cards.css";

const Card = ({ img, title, link, date, text, background }) => {
  return (
    <div className="card h-80 w-60 min-w-max mx-4 my-4">
      <div className="content" style={{backgroundImage: `url(${background})`}}>
        <div className="front flex flex-wrap justify-center content-center">
          <h1>{title}</h1>
        </div>
        <div className="back">back</div>
      </div>
    </div>
  );
};

export default Card;
