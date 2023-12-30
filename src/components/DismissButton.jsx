import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../context/userContext";
import { useEmail } from "../context/emailContext";

function DismissButton() {
  const navigate = useNavigate();
  const { dispatch } = useEmailAuth();
  const { setIsValid } = useEmail();

  function handleDismissMessage() {
    navigate(-1);
    dispatch({ type: "signOut" });
    setIsValid(true);
  }

  return (
    <button
      className="mt-36 rounded-lg bg-dark-slate-grey from-first-gradient-color to-second-gradient-color px-2 py-4 text-white hover:bg-gradient-to-r md:mt-0"
      onClick={handleDismissMessage}
    >
      Dismiss message
    </button>
  );
}

export default DismissButton;
