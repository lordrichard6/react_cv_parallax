import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const JobExperience = ({ title, company, link, from, to, text }) => {
  return (
    <div
      className="w-1/2 h-80 p-4 rounded-md bg-top"
      style={{
        borderLeft: "3px solid",
      }}
    >
      <h1 className="text-xl">
        <ArrowRightIcon />
        {title}
      </h1>
      <div className="pl-6">
        <p className="text-lg">
          I worked for{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-600">
            {company}
          </a>
          {" "}from {from} to {to}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default JobExperience;
