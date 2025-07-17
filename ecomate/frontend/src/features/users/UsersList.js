import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;

  if (isLoading) {
    content = (
      <p className="text-center text-blue-500 font-medium py-4">Loading...</p>
    );
  } else if (isError) {
    content = (
      <p className="text-center text-red-600 font-semibold py-4">
        {error?.data?.message || 'Error loading users'}
      </p>
    );
  } else if (isSuccess) {
    const { ids } = users;

    content = (
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto bg-white dark:bg-gray-900 border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {ids?.length > 0 ? (
              ids.map((userId) => <User key={userId} userId={userId} />)
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  return <section className="px-4 py-6">{content}</section>;
};

export default UsersList;
