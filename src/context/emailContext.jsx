import { createContext, useContext, useState } from "react";
import { validateEmail } from "../utils/helper";

const EmailContext = createContext();

function EmailProvider({ children }) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const isEmptyEmail = email.trim() === "";
  const isValidEmail = validateEmail(email) === true;

  function handleCheckEmailInput() {
    if (isEmptyEmail) {
      setIsEmpty(true);
      setIsValid(true);
    }

    if (!isEmptyEmail && !isValidEmail) {
      setIsValid(false);
      setIsEmpty(false);
    }
  }

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  function handleClearInput() {
    setEmail("");
  }

  return (
    <EmailContext.Provider
      value={{
        email,
        handleInputChange,
        handleClearInput,
        handleCheckEmailInput,
        isValid,
        setIsValid,
        isValidEmail,
        isEmpty,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}

function useEmail() {
  const context = useContext(EmailContext);

  if (context === undefined) {
    throw new Error("EmailContext was used outside the EmailProvider");
  }

  return context;
}

export { EmailProvider, useEmail };
