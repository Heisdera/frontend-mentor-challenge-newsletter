import { useNavigate } from "react-router-dom";

import { useEmail } from "../context/emailContext";
import { useEmailAuth } from "../context/userContext";
import ReceiveUpdatesOn from "./UpdateList";

function Form() {
  const {
    email,
    handleInputChange,
    handleClearInput,
    handleCheckEmailInput,
    isValid,
    isValidEmail,
    isEmpty,
  } = useEmail();
  const { dispatch } = useEmailAuth();
  const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();
    handleCheckEmailInput();

    if (isValidEmail) {
      dispatch({ type: "signUp", payload: email });
      navigate("/success");
      handleClearInput();
    }
  }

  return (
    <form
      className="max-w-[450px] px-6 py-5 md:my-auto md:pl-11 md:pr-8 lg:pl-14"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-3 text-[42px] font-bold md:text-5xl">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ReceiveUpdatesOn />

      <div className="flex flex-col">
        <span className="flex items-center justify-between">
          <label htmlFor="email" className="text-sm font-bold">
            Email address
          </label>

          {!isValid && (
            <p className="shake text-sm font-bold text-tomato-red">
              Valid email required
            </p>
          )}

          {isEmpty && (
            <p className="shake text-sm font-bold text-tomato-red">
              Email required
            </p>
          )}
        </span>

        <input
          type="text"
          id="email"
          className={`mb-6 mt-2 rounded-lg border border-neutral-grey px-5 py-[14px] ${
            !isValid &&
            "border-2 border-tomato-red bg-red-100 text-tomato-red placeholder:text-tomato-red focus:outline-tomato-red"
          }`}
          placeholder="email@company.com"
          value={email}
          onChange={handleInputChange}
        />

        <button className="rounded-lg bg-dark-slate-grey from-first-gradient-color to-second-gradient-color py-4 text-sm font-bold text-white hover:bg-gradient-to-r active:bg-gradient-to-r lg:text-base">
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}

export default Form;
