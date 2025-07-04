import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");

  const showHome = pathname !== "/dash";

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-3 px-4 flex items-center justify-between fixed bottom-0 left-0 w-full z-20">
      {showHome ? (
        <button
          onClick={onGoHomeClicked}
          className="flex items-center justify-center p-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white rounded transition"
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} className="h-6 w-6" />
        </button>
      ) : (
        <div className="h-6 w-6" /> /** placeholder for alignment **/
      )}

      <div className="text-sm text-gray-700 dark:text-gray-400">
        <span className="font-semibold">User:</span> John Doe
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-400">
        <span className="font-semibold">Status:</span> Online
      </div>
    </footer>
  );
};

export default DashFooter;
