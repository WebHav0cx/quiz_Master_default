import React, { useContext } from "react";
import { User, LogOut } from "lucide-react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const NavBar = ({ currentView, onViewChange }) => {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            QuizMaster
          </h1>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => onViewChange("dashboard")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </button>
            {user?.role === "admin" && (
              <button
                onClick={() => onViewChange("admin")}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Admin
              </button>
            )}
          </div>
        </div>

        {/* <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
              <button
                onClick={logout}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          ) : (
            <button
              onClick={() => login(true)}
              className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
            >
              Sign in
            </button>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
