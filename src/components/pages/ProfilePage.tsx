import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import {
  getLoggedInUser,
  logoutUser,
} from "../../services/localStorageServices";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    logoutUser(() => navigate("/auth"));
  };

  const loggedInUser = getLoggedInUser();
  return (
    <div className="flex mt-20 border-2 mx-10 shadow-md px-10 py-12 justify-between items-center">
      <div className="flex items-center">
        <FaRegUserCircle className="text-8xl" />
        <div className="flex gap-2 flex-col px-4">
          <span>{loggedInUser.name}</span>
          <span>{loggedInUser.email}</span>
        </div>
      </div>
      {loggedInUser.email ? (
        <button
          onClick={onLogOut}
          className="self-end px-4 py-2 bg-red-500 text-white rounded"
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth")}
          className="self-end px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Login Page
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
