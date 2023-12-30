import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="">
      <p>Page not found😢.</p>
      <button className="text-blue-400 underline" onClick={() => navigate("/")}>
        &larr; back
      </button>
    </div>
  );
}

export default PageNotFound;
