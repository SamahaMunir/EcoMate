import { Link } from "react-router-dom";
import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-PK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "Asia/Karachi"
  }).format(date); // Pakistan format & timezone :contentReference[oaicite:1]{index=1}

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
      <p className="text-gray-600 dark:text-gray-300 text-sm">{today}</p>

      <h1 className="text-3xl font-bold text-green-600">Welcome to CarbonTrack!</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        <Link
          to="/dash/activities"
          className="flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
        >
          <CalendarDaysIcon className="h-5 w-5 mr-2" />
          View Activity Log
        </Link>

        <Link
          to="/dash/users"
          className="flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
        >
          <UsersIcon className="h-5 w-5 mr-2" />
          User Settings
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
