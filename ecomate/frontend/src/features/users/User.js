import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';

const User = ({ userId }) => {
  const user = useSelector(state => selectUserById(state, userId));
  const navigate = useNavigate();

  if (!user) return null;

  const handleEdit = () => navigate(`/dash/users/${userId}`);

  const username = user.name || user.email;
  const userEmail = user.email || '—';


  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap text-left">
        {username}
      </td>
      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap text-left">
        {userEmail}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-left">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:text-blue-800 transition"
          title="Edit user"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </td>
    </tr>
  );
};

export default User;
