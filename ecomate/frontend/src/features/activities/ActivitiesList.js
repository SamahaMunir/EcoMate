import { useGetActivitiesQuery } from "./activitiesApiSlice";
import Activity from "./Activity";

const ActivitiesList = () => {
  const {
    data: activities,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetActivitiesQuery();

  let content;

  if (isLoading) {
    content = <p className="text-center text-blue-500 font-medium py-4">Loading...</p>;
  } else if (isError) {
    content = (
      <p className="text-center text-red-600 font-semibold py-4">
        {error?.data?.message || 'Error fetching activities'}
      </p>
    );
  } else if (isSuccess) {
    const { ids } = activities;

    const tableContent = ids?.length
      ? ids.map(activityId => <Activity key={activityId} activityId={activityId} />)
      : (
        <tr>
          <td colSpan="6" className="text-center py-4 text-gray-500">
            No activities found.
          </td>
        </tr>
      );

    content = (
      <section className="px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">All Activities</h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 table-auto">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Carbon (kg)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tableContent}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return <>{content}</>;
};

export default ActivitiesList;
