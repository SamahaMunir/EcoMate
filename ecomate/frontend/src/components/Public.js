// src/components/Public.jsx
import { Link } from 'react-router-dom'
import { FaLeaf, FaUserFriends, FaChartLine } from 'react-icons/fa'

const Public = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to <span className="text-green-600">CarbonFit</span> 🌿
      </h1>
      <p className="mt-4 text-gray-600 max-w-md">
        Track your carbon footprint, log eco-friendly activities, and join challenges with your community!
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
        <FaLeaf className="text-green-500 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Log Activities</h3>
        <p className="text-gray-500">Record how you commute, eat, or save energy.</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
        <FaUserFriends className="text-green-500 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Join Community</h3>
        <p className="text-gray-500">Collaborate with others and take on challenges together.</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
        <FaChartLine className="text-green-500 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
        <p className="text-gray-500">See your impact over time and celebrate milestones.</p>
      </div>
    </div>

    <footer>
      <Link
        to="/login"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
      >
        User Login
      </Link>
      <Link
        to="/signup"
        className="inline-block ml-4 bg-white text-green-600 px-6 py-3 rounded shadow hover:bg-green-50 transition"
      >
        Sign Up
      </Link>
    </footer>
  </section>
)

export default Public
