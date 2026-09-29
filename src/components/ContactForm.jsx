import { useRef, useState } from "react";
import { profile } from "../data/profile";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(values.email.trim())) errors.email = "Enter an email address like name@example.com.";
  if (!values.message.trim()) errors.message = "Write a message.";
  else if (values.message.trim().length < 10) errors.message = "Write at least 10 characters so I know how to help.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | failed
  const refs = { name: useRef(null), email: useRef(null), message: useRef(null) };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = ["name", "email", "message"].find((f) => found[f]);
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }

    if (profile.contactEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(profile.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } catch {
        setStatus("failed");
      }
    } else {
      // No endpoint configured: hand the message to the visitor's email app.
      const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
      const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }
  };

  const field = (name, label, props = {}) => {
    const errorId = `${name}-error`;
    const Tag = props.as || "input";
    return (
      <div className="field">
        <label htmlFor={name}>{label}</label>
        <Tag
          id={name}
          name={name}
          ref={refs[name]}
          value={values[name]}
          onChange={onChange}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={errors[name] ? errorId : undefined}
          aria-required="true"
          {...props.attrs}
        />
        {errors[name] && (
          <p className="field__error" id={errorId}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form className="card contact-form" onSubmit={onSubmit} noValidate>
      {field("name", "Name", { attrs: { type: "text", autoComplete: "name" } })}
      {field("email", "Email", { attrs: { type: "email", autoComplete: "email" } })}
      {field("message", "Message", { as: "textarea", attrs: { rows: 6 } })}

      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div role="status" aria-live="polite" className="contact-form__status">
        {status === "success" && (
          <p className="notice notice--success">
            {profile.contactEndpoint
              ? "Message sent. Thank you, I will reply by email."
              : "Your email app should now open with your message ready to send. If it does not, email me directly using the link beside this form."}
          </p>
        )}
        {status === "failed" && (
          <p className="notice notice--error">
            The message could not be sent. Try again, or email me directly using the link beside this form.
          </p>
        )}
      </div>
    </form>
  );
}
