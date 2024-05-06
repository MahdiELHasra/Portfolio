import { useForm, ValidationError } from "@formspree/react";
import { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { store } from "../../App";
import playAudio from "../../utils/helpers/playAudio";
import "./ContactForm.scss";

export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formState, handleSubmit] = useForm("xrgnjkjz");
  const [state, dispatch] = useContext(store);
  useEffect(() => {
    if (formState.succeeded) {
      setUserName("");
      setUserEmail("");
      setMessage("");

      toast.success(
        state.language === "english"
          ? "Nachricht abgeschickt!"
          : "Message sent!",
        {
          position: "top-left",
          style: {
            border: state.darkmode
              ? "2px solid hsla(0,0%,51.4%,.16)"
              : "1px solid #ebebeb",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
            borderRadius: "14px",
            fontFamily: "Inter",
            color: state.darkmode ? "white" : "#1d1d1f",
            fontSize: "14px",
            backgroundColor: state.darkmode ? "#141414" : "",
          },
        }
      );
    }
  }, [formState.succeeded, state.language]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`contact-form-container ${
        state.darkmode ? "dark-card" : "light-card"
      } ${state.darkmode ? "dark-shadow" : "light-shadow"}`}
    >
      <div className="input-container">
        <input
          className={`field data ${
            state.darkmode ? "dark-field" : "light-field"
          }`}
          type="text"
          name="user_name"
          placeholder={state.language === "english" ? "Ihr Name" : "Your name"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <ValidationError
          prefix="Email"
          field="user_name"
          errors={state.errors}
        />
        <input
          className={`field data ${
            state.darkmode ? "dark-field" : "light-field"
          }`}
          type="email"
          name="user_email"
          placeholder={
            state.language === "english"
              ? "Ihre E-Mail-Adresse"
              : "Your email address"
          }
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <ValidationError
          prefix="Email"
          field="user_email"
          errors={state.errors}
        />
      </div>
      <textarea
        name="message"
        placeholder={
          state.language === "english"
            ? "Ihre Nachricht an mich"
            : "Your message for me"
        }
        className={`field ${state.darkmode ? "dark-field" : "light-field"}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <ValidationError prefix="Email" field="message" errors={state.errors} />
      <button
        type="submit"
        className="submit"
        value={state.language === "english" ? "Absenden" : "Submit"}
        disabled={state.submitting}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        Submit
      </button>
    </form>
  );
}
