import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectActivityById } from './activitiesApiSlice';

const Activity = ({ activityId }) => {
  const activity = useSelector(state => selectActivityById(state, activityId));
  const navigate = useNavigate();

  if (!activity) return null;

  const handleEdit = () => navigate(`/dash/activities/${activityId}`);

  const createdDate = new Date(activity.createdAt).toLocaleString('en-PK', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Extract user display name safely
  let userDisplay = 'Unknown';
  if (typeof activity.user === 'object' && activity.user !== null) {
    userDisplay = activity.user.name || activity.user.email || 'Unknown';
  } else if (typeof activity.user === 'string') {
    userDisplay = activity.user; // fallback to ID string
  }

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150">
      <td className="px-6 py-4 text-sm text-left text-gray-900 dark:text-white whitespace-nowrap">
        {activity.type}
      </td>
      <td className="px-6 py-4 text-sm text-left text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {activity.description}
      </td>
      <td className="px-6 py-4 text-sm text-left text-green-700 font-medium whitespace-nowrap">
        {activity.carbonImpactKg} kg
      </td>
      <td className="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap">
        {createdDate}
      </td>
      <td className="px-6 py-4 text-sm text-left text-blue-500 whitespace-nowrap">
        {userDisplay}
      </td>
      <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
        <button
          className="text-indigo-600 hover:text-indigo-900 transition"
          title="Edit Activity"
          onClick={handleEdit}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </td>
    </tr>
  );
};

export default Activity;
