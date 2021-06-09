import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
import tw from "twin.macro";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ProjectCard = ({ img, title, link, git, size, text, modal }) => {
  return (
    <CardContainer className={`${size}`} background={img}>
      <InfoContainer>
        <ProjectName href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </ProjectName>
        <GitIcon href={git} target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 50 }} />
        </GitIcon>
        {/* <Popup
          trigger={<ModalButton className="button"> Click me </ModalButton>}
          modal
        >
          <ModalContainer background={ModalImg}>
          </ModalContainer>
        </Popup> */}
        <Popup trigger={<ModalButton>Info</ModalButton>} position={modal}>
          <SmallText>{text}</SmallText>
        </Popup>
      </InfoContainer>
    </CardContainer>
  );
};

export default ProjectCard;

// STYLE ----------------------------------------------------------------------------------------

const CardContainer = styled.div`
  background-image: url(${({ background }) => background});
  ${tw`
    border-2
    md:border-8
    border-white
    text-white
    bg-cover
    bg-bottom
  `}
`;

const InfoContainer = styled.div`
  ${tw`
    bg-blue-600 
    bg-opacity-50 
    border-2 
    border-black 
    rounded-sm 
    w-full 
    h-full 
    flex 
    flex-col 
    justify-center 
    flex-wrap 
    content-center 
    text-center 
    space-y-4
  `}
`;

const ProjectName = styled.a`
  ${tw`
    
  `}

  h2 {
    ${tw`
      text-black 
      bg-white 
      border-2 
      border-black 
      rounded-md 
      px-1 
      mx-1 
      animate-pulse 
      transition 
      duration-300 
      ease-in 
      transform 
      hover:scale-125
      md:text-xl 
    `}
  }
`;

const GitIcon = styled.a`
  ${tw`
    animate-pulse 
    transition 
    duration-300 
    ease-in 
    transform 
    hover:scale-125
  `}
`;

const ModalButton = styled.button`
  ${tw`
    text-sm
    w-max
    text-black
    bg-white
    border-2
    border-black
    rounded-md
    px-1
    mx-1
    animate-pulse
    transition
    duration-300
    ease-in
    transform
    hover:scale-125
    md:text-base
    self-center
    justify-self-center
  `}
`;

const SmallText = styled.div`
  ${tw`
    text-base
    font-thin
    md:text-xl
  `}
`;

// const ModalContainer = styled.div`
//   background-image: linear-gradient(
//       to right,
//       rgba(0, 0, 0, 0.8),
//       rgba(0, 0, 0, 0.4),
//       rgba(0, 0, 0, 0.8)
//     ),
//     url(${({ background }) => background});
//   ${tw`
//     h-96
//     w-full
//     bg-cover
//     bg-center
//   `}
// `;
