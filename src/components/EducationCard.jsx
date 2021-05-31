import styled from "styled-components";
import tw from "twin.macro";

const EducationCard = ({ img, title, from, to, where, text }) => {
  return (
    <div className="each-slide">
      <SlideContainer>
        <img src={img} alt="art"/>

        <Desktop>
          <h1>{title}</h1>
          <h2>
            From {from} to {to} done in {where}
          </h2>
          <p>{text}</p>
        </Desktop>
        <Mobile>
          <h1>{title}</h1>
          <h2>
            From {from} to {to} done in {where}
          </h2>
          <p>{text}</p>
        </Mobile>
      </SlideContainer>
    </div>
  );
};

export default EducationCard;

const SlideContainer = styled.div.attrs({
  className: "rounded-md relative",
})`
  img {
    ${tw`rounded-md w-full`}
  }
  h1 {
    ${tw`text-2xl`}
  }
  h2 {
    ${tw`text-xl`}
  }
  p {
    ${tw`text-lg`}
  }
`;

const Desktop = styled.div.attrs({
  className: "hidden md:block absolute bottom-6 left-6 rounded-md border-2 border-black bg-white p-4 w-10/12 md:w-2/3",
})``;

const Mobile = styled.div.attrs({
  className: "block md:hidden rounded-md border-2 border-black bg-white p-4 w-full",
})``;
