import React from "react";

export default function LinkedInFooter() {
  return (
    <footer className="text-xs text-gray-600 text-center space-y-2 pt-4">
      <div className="flex justify-center flex-wrap gap-x-4 leading-6">
        <span className="hover:underline cursor-pointer">About</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <span className="hover:underline cursor-pointer">Help Center</span>
        <span className="hover:underline cursor-pointer">Privacy & Terms ▼</span>
        <span className="hover:underline cursor-pointer">Ad Choices</span>
        <span className="hover:underline cursor-pointer">Advertising</span>
        <span className="hover:underline cursor-pointer">Business Services ▼</span>
      </div>
      <div className="flex justify-center items-center gap-2 mt-1">
        <span className="text-blue-700 hover:underline cursor-pointer">Get the LinkedIn app</span>
        <span className="text-blue-700 hover:underline cursor-pointer">More</span>
      </div>
      <div className="flex justify-center items-center gap-1 text-gray-700 font-semibold pt-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn Logo"
          className="w-5 h-5"
        />
        <span>LinkedIn Corporation © 2025</span>
      </div>
    </footer>
  );
}
