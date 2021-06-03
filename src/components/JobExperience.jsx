import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import cat from "img/cat-min.png";
import speech from "img/speech-min.png";

const JobExperience = ({ title, company, link, from, to, text }) => {
  return (
    <JobContainer>
      <div className="relative w-full lg:w-1/2 flex justify-center flex-wrap content-center">
        <img
          src={speech}
          alt="speech ballon"
          className="absolute h-96 lg:h-auto bottom-2 transform rotate-180 lg:rotate-0"
        />
        <div className="w-5/6 md:w-4/5 2xl:w-2/3 absolute bottom-40 left-0 md:left-14 md:bottom-56 lg:bottom-16 lg:left-10 2xl:bottom-40 2xl:left-40">
          <h1 className="lg:mb-2 text-xl lg:text-2xl 2xl:text-4xl lg:text-black">
            <ArrowRightIcon />
            {title}
          </h1>
          <div className="pl-6 lg:text-lg 2xl:text-2xl">
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

      <img src={cat} alt="cat" className="w-full lg:w-1/2" />
    </JobContainer>
  );
};

export default JobExperience;

export const JobContainer = styled.div.attrs({
  className:
    "flex flex-col lg:flex-row justify-end flex-wrap content-center h-screen w-4/5",
})``;
