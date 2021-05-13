import "../styles/cards.css";

const Card = ({ img, title, link, date, text }) => {
  return (
    <div className="card box-border h-80 w-1/4 border-4 mx-4 my-4">
      <div className="content">
        <div className="front">
          <h1>{title}</h1>
        </div>
        <div className="back">back</div>
      </div>
    </div>
  );
};

export default Card;
