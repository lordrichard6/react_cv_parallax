import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import cat from "img/cat-min.png";
import speech from "img/speech-min.png";

const JobExperience = ({ title, company, link, from, to, text }) => {
  return (
    <JobContainer>
      <div className="relative w-full md:w-1/2 flex justify-center flex-wrap content-center">
        <img
          src={speech}
          alt="speech ballon"
          className="absolute h-96 md:h-auto bottom-2 transform rotate-180 md:rotate-0"
        />
        <div className="w-5/6 md:w-4/5 2xl:w-2/3 absolute bottom-40 left-0 md:bottom-16 md:left-10 2xl:bottom-40 2xl:left-40">
          <h1 className="text-xl 2xl:text-2xl">
            <ArrowRightIcon />
            {title}
          </h1>
          <div className="pl-6 text-md 2xl:text-xl">
            <p>
              I worked for{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-400"
              >
                {company}
              </a>{" "}
              from {from} to {to}
            </p>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <img src={cat} alt="cat" className="w-full md:w-1/2" />
    </JobContainer>
  );
};

export default JobExperience;

export const JobContainer = styled.div.attrs({
  className:
    "flex flex-col md:flex-row justify-end flex-wrap content-center h-screen w-4/5",
})``;
