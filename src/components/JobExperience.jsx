import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { JobContainer } from "../styles/Components";

const JobExperience = ({ title, company, link, from, to, text }) => {
  return (
    <JobContainer
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
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-400">
            {company}
          </a>
          {" "}from {from} to {to}
        </p>
        <p>{text}</p>
      </div>
    </JobContainer>
  );
};

export default JobExperience;
