import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button } from "@material-ui/core";

import { API_KEY } from "../emailjsKey";

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

  return (
    <section className="h-screen flex justify-center flex-wrap content-center p-6 mt-20 mb:mt-2">
      <form
        className="flex flex-col w-11/12 md:h-auto md:w-1/2 p-2 border-solid border-4 rounded-xl"
        onSubmit={onSubmit}
      >
        <TextField
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          fullWidth
          autocomplete="none"
        />
        <TextField
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth
          autocomplete="none"
        />
        <TextField
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          fullWidth
          multiline
          rows={10}
          autocomplete="none"
        />
        <Button className="pt-10 text-xl" type="Submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
