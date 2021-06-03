import styled from "styled-components";

function AboutPopup({ image, trigger, setTrigger, text }) {
  return trigger ? (
    <Popup>
      <PopupInner>
        <div className="w-screen md:w-4/5 lg:w-3/5 rounded-lg">
          <img
            src={image}
            alt="me in the jungle"
            onClick={() => setTrigger(false)}
          />
          <span className="w-auto m-0 md:m-2 lg:mx-4 lg:my-2 lg:w-5/12 md:text-lg 2xl:text-2xl">
            <p>{text}</p>
          </span>
        </div>
      </PopupInner>
    </Popup>
  ) : (
    ""
  );
}

export default AboutPopup;

const Popup = styled.div.attrs({})`
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;

`;

const PopupInner = styled.div.attrs({
  className: "flex flex-wrap justify-center content-center",
})`
  div {
    position: relative;
    & {
      img {
        border-radius: 0.5rem;
      }
      span {
        position: absolute;
        background-color: #fff;
        border-radius: 10px;
        border: 3px solid;
        top: 0;
        left: 0;
        padding: 3px;
      }
    }
  }
`;
