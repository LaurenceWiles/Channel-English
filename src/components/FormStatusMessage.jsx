const FormStatusMessage = ({ status, messageRef }) => {
  if (status === "success") {
    return (
      <p ref={messageRef} className="contact__success" role="status">
        Thank you, your message has been sent.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p ref={messageRef} className="contact__error" role="alert">
        Sorry, something went wrong. Please try again.
      </p>
    );
  }

  return null;
};

export default FormStatusMessage;
