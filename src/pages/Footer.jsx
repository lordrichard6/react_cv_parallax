import React, { useState } from "react";
import emailjs from "emailjs-com";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HomeIcon from "@material-ui/icons/Home";
import CopyrightIcon from "@material-ui/icons/Copyright";

import { API_KEY } from "emailjsKey";
import { Footer, FooterWrapper } from "../styles/App";

import react from "img/react.png";
import tailwind from "img/tailwindcss.png";
import material from "img/material-ui.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgba(253, 250, 233, 0.7)",
      color: "black",
    },
  },
}));

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_if9z5ob", e.target, API_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  const classes = useStyles();

  return (
    <Footer className="bg-contact">
      <FooterWrapper>
        <h2>Thank you</h2>
        <h2>for visiting</h2>
        <p className="text-xl p-1 flex justify-center">
          This website is powered by:
        </p>
        <div className="flex flex-row justify-center py-2">
          <img
            src={react}
            alt="reactjs"
          />
          <img
            src={tailwind}
            alt="tailwindcss"
          />
          <img
            src={material}
            alt="material-ui"
          />
        </div>
      </FooterWrapper>

      <FooterWrapper>
        <h1>Contact me</h1>
        <form onSubmit={onSubmit}>
          <TextField
            className={classes.root}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            fullWidth
            autocomplete="none"
            variant="filled"
          />
          <TextField
            className={classes.root}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
            autocomplete="none"
            variant="filled"
          />
          <TextField
            className={classes.root}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
            fullWidth
            multiline
            rows={10}
            autocomplete="none"
            variant="filled"
          />
          <div className="flex justify-center m-2">
            <Button
              variant="contained"
              color="primary"
              className="w-1/4"
              type="Submit"
            >
              Send
            </Button>
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
