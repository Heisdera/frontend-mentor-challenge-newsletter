import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../context/userContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useEmailAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
