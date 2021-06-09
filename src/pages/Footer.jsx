import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "twin.macro";

import { API_KEY } from "assets/emailjsKey";

import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  AlternateEmailIcon,
  PhoneAndroidIcon,
  HomeIcon,
  CopyrightIcon,
  MailIcon,
} from "assets/imports";

import { react01, tailwind, material } from "assets/imports";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const statusMessage = document.querySelector(".status-message");

    emailjs.sendForm("gmail", "template_if9z5ob", e.target, API_KEY).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Message sent sucessfully!");
        statusMessage.className =
          "status-message text-green-500 text-opacity-0 self-center";
        setTimeout(() => {
          statusMessage.className = "status-message text-opacity-100";
        }, 2000);
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("Failed to send message! Try again.");
        statusMessage.className =
          "status message text-red-500 text-opacity-0 self-center";
        setTimeout(() => {
          statusMessage.className = "status-message text-opacity-100";
        }, 2000);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Footer className="bg-contact">
      <FooterWrapper>
        <Thanks>Thank you</Thanks>
        <Thanks>for visiting</Thanks>
        <SmallText2>
          This website is powered by:
        </SmallText2>
        <ImgContainer>
          <Img src={react01} alt="reactjs" />
          <Img src={tailwind} alt="tailwindcss" />
          <Img src={material} alt="material-ui" />
        </ImgContainer>
      </FooterWrapper>

      <FooterWrapper className="order-first lg:order-none flex flex-col">
        <Title>Contact me</Title>
        <EmailSend className="status-message">{statusMessage}</EmailSend>
        <form id="contact-form" onSubmit={submitForm}>
          <FormContainer>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="5"
              maxLength="200"
            />
          </FormContainer>

          <ButtonContainer>
            <SubmitButton
              type="submit"
            >
              <MailIcon fontSize="large" />
            </SubmitButton>
          </ButtonContainer>
        </form>
      </FooterWrapper>

      <FooterWrapper>
        <Title>Social</Title>
        <LinkContainer>
          <Link
            href="https://github.com/lordrichard6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pauloreizinho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.instagram.com/l0rdr1chard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </Link>
        </LinkContainer>
        <SmallText>
          <HomeIcon fontSize="medium" />
          Currently living in Zurich
        </SmallText>
        <SmallText>
          <AlternateEmailIcon fontSize="medium" />
          paulolopesreizinho@gmail.com
        </SmallText>
        <SmallText>
          <PhoneAndroidIcon fontSize="medium" />
          +41 78 798 95 33
        </SmallText>
        <SmallText>
          <CopyrightIcon fontSize="medium" />
          Copyright &copy; by Paulo Reizinho
        </SmallText>
      </FooterWrapper>
    </Footer>
  );
};

export default ContactForm;

export const Footer = styled.footer`
  ${tw`
    h-auto 
    flex 
    pt-10 
    lg:pt-0 
    space-x-2 
    lg:space-x-12 
    flex-col 
    lg:flex-row 
    justify-center 
    flex-wrap 
    content-center 
    p-6 
    md:mt-2 
    text-white 
    bg-center 
    bg-cover
  `}

`;

const FooterWrapper = styled.div`

  ${tw`
    flex 
    flex-1 
    flex-col 
    flex-wrap 
    justify-center 
    content-center  
    lg:h-auto 
    lg:w-1/2 
    px-2 
    py-4
  `}
`;

const Thanks = styled.h2`
  ${tw`
    text-4xl 
    pb-4 
    flex 
    justify-center
  `}
`

const ImgContainer = styled.div`
  ${tw`
    flex 
    flex-row 
    justify-center 
    py-2
  `}
`

const Img = styled.img`
  ${tw`
    h-1/3 
    w-1/3 
    lg:w-1/5 
    lg:h-auto 
    p-1
  `}
`

const Title = styled.h1`
  ${tw`
    text-4xl 
    pb-4 
    flex 
    justify-center
  `}
`

const FormContainer = styled.div`
  ${tw`
    border-4 
    border-black 
    rounded-xl 
    text-black
  `}

  input {
    ${tw`
      w-full 
      h-10 
      border-b-4 
      border-black 
      pl-2
    `}
  }

  textarea {
    ${tw`
      w-full 
      pl-2
    `}
  }
`

const ButtonContainer = styled.div`
  ${tw`
    flex 
    justify-center 
    m-2
  `}
`

const SubmitButton = styled.button`
  ${tw`
    w-1/4 
    border-2 
    rounded-lg 
    bg-green-600
  `}
`

const EmailSend = styled.p`
  ${tw`
    text-opacity-100
  `}
`

const LinkContainer = styled.div`
  ${tw`
    flex 
    justify-center
  `}
`
const Link = styled.a`
  ${tw`
    p-2
  `}
`

const SmallText = styled.p`
  ${tw`
    text-base
    md:text-xl 
    p-1
  `}
`
const SmallText2 = styled.p`
  ${tw`
    text-xl 
    p-1 
    flex 
    justify-center
  `}
`