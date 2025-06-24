import React from "react";

export default function LinkedInAdCard() {
  return (
    <div className="bg-white rounded shadow p-4 w-full max-w-sm mx-auto">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <img
            src="https://static.licdn.com/sc/h/3mvq5mv7v0y7l3ks20fj0xj3a"
            alt="Panaya Logo"
            className="w-10 h-10 rounded"
          />
          <div>
            <h2 className="font-semibold">Panaya</h2>
            <p className="text-sm text-gray-600">
              Isha, you might like to follow Panaya
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Get the latest on jobs, news, and more
            </p>
          </div>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Promoted</span>
      </div>
      <button className="mt-4 w-full border border-blue-600 text-blue-600 font-semibold rounded-full py-1 hover:bg-blue-50">
        Follow
      </button>
    </div>
  );
}
