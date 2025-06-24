import React from "react";

export default function LinkedInNewsCard() {
  return (
    <>
     
      <div className="bg-white rounded shadow p-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto space-y-4 mb-4">
      
        <div>
          <h3 className="font-bold text-gray-800 text-base sm:text-lg md:text-xl mb-2">LinkedIn News</h3>
          <p className="text-sm font-semibold text-gray-700 mb-2">Top stories</p>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="hover:underline cursor-pointer">
              <span className="font-semibold">Mumbai Airport lands $1 billion</span>
              <p className="text-xs text-gray-500">2h ago • 35,293 readers</p>
            </li>
            <li className="hover:underline cursor-pointer">
              <span className="font-semibold">Iran, Israel agree to ceasefire</span>
              <p className="text-xs text-gray-500">53m ago • 1,865 readers</p>
            </li>
            <li className="hover:underline cursor-pointer">
              <span className="font-semibold">Oil prices dip on Iran ceasefire</span>
              <p className="text-xs text-gray-500">1h ago • 386 readers</p>
            </li>
            <li className="hover:underline cursor-pointer">
              <span className="font-semibold">Big Four goes big on hiring</span>
              <p className="text-xs text-gray-500">3h ago • 13,175 readers</p>
            </li>
            <li className="hover:underline cursor-pointer">
              <span className="font-semibold">More recruiters get AI savvy</span>
              <p className="text-xs text-gray-500">3h ago • 7,409 readers</p>
            </li>
          </ul>
          <button className="text-sm text-blue-600 font-semibold mt-2 hover:underline">Show more ▾</button>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Today’s puzzles</p>
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">🟧</span>
                <div>
                  <p className="font-semibold">Zip <span className="text-xs">#99</span></p>
                  <p className="text-xs text-gray-500">Complete the path</p>
                </div>
              </div>
              <span className="text-lg">›</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">🟨</span>
                <div>
                  <p className="font-semibold">Tango <span className="text-xs">#260</span></p>
                  <p className="text-xs text-gray-500">Harmonize the grid</p>
                </div>
              </div>
              <span className="text-lg">›</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">🟪</span>
                <div>
                  <p className="font-semibold">Queens <span className="text-xs">#420</span></p>
                  <p className="text-xs text-gray-500">Crown each region</p>
                </div>
              </div>
              <span className="text-lg">›</span>
            </li>
          </ul>
          <button className="text-sm text-blue-600 font-semibold mt-2 hover:underline">Show more ▾</button>
        </div>
      </div>

      
      <div className="bg-white rounded shadow p-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
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
    </>
  );
}

