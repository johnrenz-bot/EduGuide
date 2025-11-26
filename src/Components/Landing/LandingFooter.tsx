export default function LandingFooter() {
  return (
    <footer className="w-full bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300">

        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-white">EduGuide</h1>
          <p className="text-sm text-gray-400">Your path, your future.</p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white text-sm">About</a>
          <a href="#" className="hover:text-white text-sm">Strands</a>
          <a href="#" className="hover:text-white text-sm">Courses</a>
          <a href="#" className="hover:text-white text-sm">Contact</a>
        </div>

        <p className="text-gray-500 text-xs mt-4 md:mt-0">© 2025 EduGuide. All rights reserved.</p>
      </div>
    </footer>
  );
}
