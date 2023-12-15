import React, { useState } from "react";
import student from "../assets/image/student.png";
import teach from "../assets/image/teacher.png";
import courses from "../assets/image/books.png";
import faculties from "../assets/image/faculties.png";

import PieChart from "./Piechart";
import teacher1 from "../assets/image/teacher-img.jpg";
import teacher2 from "../assets/image/teacher2.jpg";
import teacher3 from "../assets/image/teacher3.jpg";
import teacher4 from "../assets/image/teacher4.jpg";
import teacher5 from "../assets/image/teacher5.png";
import teacher6 from "../assets/image/teacher6.jpg";

const Home = () => {
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
    <div className="mx-auto">
      <section className="">
        <div className="flex flex-row gap-3 justify-center mt-8">
          <div className="bg-sky-500 h-40 w-64 rounded-md">
            <div className="flex flex-row p-6 justify-between">
              <img className="h-24 " src={student} alt="" />
              <div>
                <h1 className="font-bold text-4xl text-white">300</h1>
                <div className="font-semibold text-2xl text-white">
                  Students
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500 h-40 w-64 rounded-md">
            <div className="flex flex-row p-6 justify-between">
              <img className="h-24 " src={teach} alt="" />
              <div>
                <h1 className="font-bold text-4xl text-white">50</h1>
                <div className="font-semibold text-2xl text-white">
                  Teachers
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500 h-40 w-64 rounded-md">
            <div className="flex flex-row p-6 justify-between">
              <img className="h-24 " src={courses} alt="" />
              <div>
                <h1 className="font-bold text-4xl text-white">12</h1>
                <div className="font-semibold text-2xl text-white">Courses</div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500 h-40 w-64 rounded-md">
            <div className="flex flex-row p-6 justify-between">
              <img className="h-24 " src={faculties} alt="" />
              <div>
                <h1 className="font-bold text-4xl text-white">10</h1>
                <div className="font-semibold text-2xl text-white">
                  Faculties
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 flex flex-row justify-evenly gap-4">
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Teachers
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {teachers.map((teacher) => (
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={teacher.img}
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {teacher.name}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {teacher.email}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-sm font-semibold text-blue-500 dark:text-white cursor-pointer">
                      view
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <div className=" font-bold text-2xl text-slate-600 mb-6">
            Student By Countries
          </div>
          <PieChart />
        </div>

        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Standard plan
          </h5>
          <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">49</span>
            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                2 team members
              </span>
            </li>
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                20GB Cloud storage
              </span>
            </li>
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Integration help
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Sketch Files
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                API Access
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Complete documentation
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                24×7 phone & email support
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Enrol Now
          </button>
        </div>
      </section>

      {/* <section className="flex flex-row gap-4 mt-8">
        <div className="mx-auto">
          <div className="font-bold text-2xl text-slate-600 mb-6">
            Top Teachers
          </div>
          <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <div className="p-4 bg-white dark:bg-gray-900">
              <label for="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search ID"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Teachers Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Teahers Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Perfomance Rate
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$179</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    iPad
                  </th>
                  <td className="px-6 py-4">Gold</td>
                  <td className="px-6 py-4">Tablet</td>
                  <td className="px-6 py-4">$699</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 27"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">PC Desktop</td>
                  <td className="px-6 py-4">$3999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mx-auto">
          <div className=" font-bold text-2xl text-slate-600 mb-6">
            Student By Countries
          </div>
          <PieChart />
        </div>
      </section> */}
    </div>
  );
};

export default Home;
