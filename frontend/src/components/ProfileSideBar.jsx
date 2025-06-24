import React from 'react'

function ProfileSideBar() {
  return (
    <div>
         <aside className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
     
      <div className="h-24 bg-blue-600"></div>

      
      <div className="flex flex-col items-center p-4 -mt-12">
        <img
          className="w-24 h-24 rounded-full border-4 border-white"
          src="/Design Studio.jpeg"
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">Atishay Jain</h2>
        <p className="text-sm text-gray-500">Frontend Developer | React Enthusiast</p>
      </div>

      
      <div className="px-4 py-2 border-t border-b border-gray-100 text-sm text-gray-700">
        <div className="flex justify-between py-1">
          <span>Profile Views</span>
          <span className="font-medium text-blue-600">112</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Connections</span>
          <span className="font-medium text-blue-600">298</span>
        </div>
      </div>

      
      <div className="p-4 text-sm text-gray-700">
        <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">My Items</div>
        <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Saved Posts</div>
        <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Account Settings</div>
      </div>
    </aside>
    </div>
  )
}

export default ProfileSideBar