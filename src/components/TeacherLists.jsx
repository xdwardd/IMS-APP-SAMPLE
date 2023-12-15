import React, { useState } from "react";
import student from "../assets/image/student.png";
import TeacherProfile from "./TeacherProfile";
import teach from "../assets/image/teacher.png";
import teacher1 from "../assets/image/teacher-img.jpg";
import teacher2 from "../assets/image/teacher2.jpg";
import teacher3 from "../assets/image/teacher3.jpg";
import teacher4 from "../assets/image/teacher4.jpg";
import teacher5 from "../assets/image/teacher5.png";
import teacher6 from "../assets/image/teacher6.jpg";

import "flowbite";
import { data } from "autoprefixer";
const TeacherLists = ({ activeSection }) => {
  const [page, activePage] = useState("teacher-list");

  const teachers = [
    {
      id: 1,
      name: "Terese L. Brown",
      email: "teresebrown@jourrapide.com",
      number: "630-975-2725",
      img: teacher1,
    },
    {
      id: 2,
      name: "Glenn M. Norwood",
      email: "glennnorwood@teleworm.us",
      number: "630-975-2725",
      img: teacher2,
    },
    {
      id: 3,
      name: "Clare M. Bennett",
      email: "917-925-6519",
      number: "clarebennett@jourrapide.com",
      img: teacher3,
    },
    {
      id: 4,
      name: "Thomas K. Nicolas",
      email: "thomasnicolas@armyspy.com",
      number: "785-370-5735",
      img: teacher4,
    },
    {
      id: 5,
      name: "Robert E. Ramirez",
      email: "robertramirez@jourrapide.com",
      number: "859-951-5048",
      img: teacher5,
    },
    {
      id: 6,
      name: "Richard T. Chapman",
      email: "richardchapman@rhyta.com",
      number: "703-329-1325",
      img: teacher6,
    },
  ];
  return (
    <div>
      {page == "teacher-list" ? (
        <>
          <div className="flex flex-row justify-between p-8">
            <button
              type="button"
              className=" w-40 mt-8 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => activeSection("add-teacher")}
            >
              Add New
            </button>

            <form className="flex items-center">
              <label for="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search ID"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 p-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className=" block max-w-sm p-6 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-row md:flex-col lg:flex-row sm:flex-col  justify-evenly">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={teacher.img}
                    alt="Bonnie image"
                  />
                  <div className="mb-3 flex flex-col gap-0 p-2 mt-2">
                    <div className="font-semibold text-gray-600">
                      {teacher.name}
                    </div>
                    <span className="text-sm text-gray-500">
                      {teacher.email}
                    </span>
                    <span className="text-sm text-gray-500">
                      {teacher.number}
                    </span>
                  </div>
                </div>

                <div
                  className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => activePage("teacher-profile")}
                >
                  View Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <TeacherProfile activePage={activePage} />
      )}{" "}
    </div>
  );
};

export default TeacherLists;
