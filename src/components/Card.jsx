import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
// import tw from "twin.macro";

const Card = ({ img, title, link, git, text, size }) => {
  return (
    <ProjectCard
      className={` ${size}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-blue-600 bg-opacity-50 border-2 border-black rounded-sm w-full h-full flex flex-col justify-center flex-wrap content-center text-center space-y-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2"
        >
          <h2 className='md:text-xl text-black bg-white border-2 border-black rounded-md px-1 mx-1 animate-pulse transition duration-300 ease-in transform hover:scale-125'>{title}</h2>
        </a>
        <a href={git} className="animate-pulse transition duration-300 ease-in transform hover:scale-125" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 50 }}/>
        </a>
        {/* <p className="md:text-lg pt-2 md:pt-4">created with</p>
        <p>{text}</p> */}
      </div>
    </ProjectCard>
  );
};

export default Card;

// STYLE ----------------------------------------------------------------------------------------

const ProjectCard = styled.div.attrs({
  className: "border-2 md:border-8 border-white text-white bg-cover bg-bottom",
})`
  a {
    display: flex;
    justify-content: center;
  }
  p {
    text-align: center;
  }
`;
