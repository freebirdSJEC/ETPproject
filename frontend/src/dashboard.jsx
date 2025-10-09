export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-56 min-h-screen bg-gray-800 text-white p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
              Profile
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
              Sign Out
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Welcome to your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-12 rounded-lg shadow-md text-center text-2xl font-semibold transform transition hover:scale-105 text-black h-70">
            Take Quiz
          </div>
          <div className="bg-white p-12 rounded-lg shadow-md text-center text-2xl font-semibold transform transition hover:scale-105 text-black h-70">
            Documentation
          </div>
          <div className="bg-white p-12 rounded-lg shadow-md text-center text-2xl font-semibold transform transition hover:scale-105 text-black h-70">
            Learn Something
          </div>
        </div>
      </main>
    </div>
  );
}