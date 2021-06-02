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
} from "./index";

import { react, tailwind, material } from "./index";

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
        <h2>Thank you</h2>
        <h2>for visiting</h2>
        <p className="text-xl p-1 flex justify-center">
          This website is powered by:
        </p>
        <div className="flex flex-row justify-center py-2">
          <img src={react} alt="reactjs" />
          <img src={tailwind} alt="tailwindcss" />
          <img src={material} alt="material-ui" />
        </div>
      </FooterWrapper>

      <FooterWrapper className="order-first md:order-none flex flex-col">
        <h1>Contact me</h1>
        <p className="status-message text-opacity-100">{statusMessage}</p>
        <form id="contact-form" onSubmit={submitForm}>
          <div className="border-4 border-black rounded-xl text-black">
            <input
              className="w-full h-10 border-b-4 border-black pl-2"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="w-full h-10 border-b-4 border-black pl-2"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <textarea
              className="w-full h-40 pl-2"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="5"
              maxLength="200"
            />
          </div>

          <div className="flex justify-center m-2">
            <button
              className="w-1/4 border-2 rounded-md bg-green-600"
              type="submit"
            >
              <MailIcon fontSize="large" />
            </button>
          </div>
        </form>
      </FooterWrapper>

      <FooterWrapper>
        <h1>Social</h1>
        <div className="flex justify-center">
          <a
            href="https://github.com/lordrichard6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/pauloreizinho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/l0rdr1chard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
        <p>
          <HomeIcon fontSize="medium" />
          Currently living in Zurich
        </p>
        <p>
          <AlternateEmailIcon fontSize="medium" />
          paulolopesreizinho@gmail.com
        </p>
        <p>
          <PhoneAndroidIcon fontSize="medium" />
          +41 78 798 95 33
        </p>
        <p>
          <CopyrightIcon fontSize="medium" />
          Copyright &copy; by Paulo Reizinho
        </p>
      </FooterWrapper>
    </Footer>
  );
};

export default ContactForm;

export const Footer = styled.footer.attrs({
  className:
    "h-auto flex pt-10 md:pt-0 space-x-2 md:space-x-12 flex-col md:flex-row justify-center flex-wrap content-center p-6 mb:mt-2 text-white bg-center bg-cover",
})`
  & {
    h1 {
      ${tw`text-4xl pb-4 flex justify-center`}
    }
  }
`;

export const FooterWrapper = styled.div.attrs({
  className:
    "flex flex-1 flex-col flex-wrap justify-center content-center  md:h-auto md:w-1/2 px-2 py-4",
})`
  & {
    h2 {
      ${tw`text-4xl pb-4 flex justify-center`}
    }

    p {
      ${tw`text-xl p-1`}
    }

    img {
      ${tw`h-1/3 w-1/3 md:w-1/5 md:h-auto p-1`}
    }

    a {
      ${tw`p-2`}
    }
  }
`;
