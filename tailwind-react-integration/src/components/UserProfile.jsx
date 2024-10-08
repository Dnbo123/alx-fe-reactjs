import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs  md:max-w-sm sm:p-4 mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg hover:shadow-xl ">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg sm:text-1g md:text-x1 text-blue-800 my-3 sm:my-4 hover:text-blue-500">User profile</h1>
      <p className="text-sm sm:text-sm md:text-xl text-gray-600">
        This user loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;