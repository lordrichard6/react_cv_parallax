import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import CopyrightIcon from '@material-ui/icons/Copyright';
// import { Parallax } from "react-scroll-parallax";

// import title from "../img/contact-min.png";
import { API_KEY } from "../emailjsKey";
import react from "../img/react.png";
import tailwind from "../img/tailwindcss.png";
import material from "../img/material-ui.png";

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
    <footer className="h-auto flex pt-10 md:pt-0 space-x-2 md:space-x-12 flex-col md:flex-row justify-center flex-wrap content-center p-6 mb:mt-2 text-white bg-contact bg-center bg-cover">
      {/* <div className="m-6 flex justify-center">
        <Parallax
          y={[-20, 20]}
          x={[10, -10]}
          className="h-20 md:w-1/3 md:h-auto z-40"
        >
          <img src={title} alt="title" />
        </Parallax>
      </div> */}

      <div className="flex-1 flex flex-col flex-wrap justify-center content-center px-2 py-4">
        <h1 className="text-4xl pb-4 flex justify-center">Thank you</h1>
        <p className="text-4xl pb-4 flex justify-center">for visiting</p>
        <p className="text-xl p-1 flex justify-center">This website is powered by:</p>
        <div className="flex flex-row justify-center py-2">
          <img src={react} alt="reactjs" className="h-1/3 w-1/3 md:w-1/5 md:h-auto p-1" />
          <img src={tailwind} alt="tailwindcss" className="h-1/3 w-1/3 md:w-1/5 md:h-auto p-1" />
          <img src={material} alt="material-ui" className="h-1/3 w-1/3 md:w-1/5 md:h-auto p-1" />
        </div>
      </div>

      <div className="flex flex-1 flex-col flex-wrap content-center md:h-auto md:w-1/2 px-2 py-4">
        <h1 className="text-4xl pb-4 flex justify-center">Contact me</h1>
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
      </div>

      <div className="flex-1 flex flex-col flex-wrap justify-center content-center px-2 py-4 md:h-auto">
        <h1 className="text-4xl pb-4 flex justify-center">Social</h1>
        <div className="flex justify-center">
          <a
            href="https://github.com/lordrichard6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/pauloreizinho/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/l0rdr1chard/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
        <p className="text-xl p-1"><HomeIcon fontSize="medium" />Currently living in Zurich</p>
        <p className="text-xl p-1"><AlternateEmailIcon fontSize="medium" />paulolopesreizinho@gmail.com</p>
        <p className="text-xl p-1"><PhoneAndroidIcon fontSize="medium" />+41 78 798 95 33</p>
        <p className="text-xl p-1 object-none object-bottom"><CopyrightIcon fontSize="medium" />Copyright &copy; by Paulo Reizinho</p>
      </div>
    </footer>
  );
};

export default ContactForm;
