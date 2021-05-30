// import { EdCard } from "../styles/Components";

const EducationCard = ({ img, title, from, to, where, text }) => {
  return (
    <div className="each-slide">
      <div className="rounded-md relative">
        <img src={img} alt="" className="rounded-md w-full" />
        <div className="absolute bottom-4 left-4 rounded-md border-2 border-black bg-white p-4 w-10/12 md:w-2/3">
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-xl">
            From {from} to {to} done in {where}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
