import { EdCard } from "../styles/Components";

const EducationCard = ({ img, align, title, from, to, where, text }) => {
  return (
    <EdCard
      style={{
        backgroundImage: `url(${img})`,
        justifyContent: `${align}`,
        borderTop: "3px solid",
        borderBottom: "3px solid",
      }}
    >
      <div
        className="flex h-full bg-gray-800 bg-opacity-50"
        style={{ justifyContent: `${align}` }}
      >
        <div className="p-4 text-white w-10/12 md:w-2/3">
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-xl">
            From {from} to {to} done in {where}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </EdCard>
  );
};

export default EducationCard;
