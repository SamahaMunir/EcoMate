import { Link } from 'react-router-dom'
import { HomeIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const DashHeader = () => (
  <header className="bg-white shadow mb-6 sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/dash" className="flex items-center space-x-2">
        <ChartBarIcon className="h-8 w-8 text-green-500" />
        <h1 className="text-2xl font-bold text-gray-800">CarbonFit Dashboard</h1>
      </Link>
      <nav className="flex space-x-4">
        <Link to="/dash/activities" className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-gray-100">
          <HomeIcon className="h-6 w-6 text-gray-600" /><span>Activities</span>
        </Link>
        <Link to="/dash/users" className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-gray-100">
          <UserGroupIcon className="h-6 w-6 text-gray-600" /><span>Users</span>
        </Link>
      </nav>
    </div>
  </header>
)

export default DashHeader
