import React, { useState } from "react";
import imslogo from "../assets/image/imslogo.jpg";
import profile from "../assets/image/teacher-img.jpg";
import "flowbite";
const TeacherProfile = ({ activePage }) => {
  const [setName, setSelectedName] = useState(null);
  const [setTime, setSelectedTime] = useState(null);
  const data = [
    {
      id: 1,
      name: "Native 2",
      time: "8:00 - 8:30",
      students: [
        { id: 1, name: "Jorge J. Michael" },
        { id: 2, name: "Julia A. Dillard" },
      ],
    },
    {
      id: 2,
      name: "IELTS Listening (Pre IELTS)",
      time: "8:30 - 9:00",
      students: [
        { id: 1, name: "Julia A." },
        { id: 2, name: "Alice M. Ventura" },
      ],
    },
    {
      id: 3,
      name: "IELTS Integration",
      time: "9:00 - 9:30",
      students: [
        { id: 1, name: "Robert M. Gay" },
        { id: 2, name: "Nelson Z. Reade" },
      ],
    },
    {
      id: 4,
      name: "Conversation",
      time: "9:30 - 10:00",
      students: [
        { id: 1, name: "Jorge C. Dixon" },
        { id: 2, name: "Nicholas R. Scruggs" },
      ],
    },
    {
      id: 5,
      name: "Speaking Beginner",
      time: "10:00 - 10:30",
      students: [
        { id: 1, name: "Leslie C. Murray" },
        { id: 2, name: "Edwin T. Jones" },
      ],
    },
    {
      id: 6,
      name: "Native",
      time: "1:00 - 1:30",
      students: [
        { id: 1, name: "Irene R. Lambert" },
        { id: 2, name: "Kirsten J. Lee" },
      ],
    },
    {
      id: 7,
      name: "Business Integration",
      time: "1:30 - 2:00",
      students: [
        { id: 1, name: "Tammy M. Carrascos" },
        { id: 2, name: "Lucy J. Gomes" },
      ],
    },
    {
      id: 8,
      name: "Listening",
      time: "2:00 - 2:30",
      students: [
        { id: 1, name: "Charles C. Rivera" },
        { id: 2, name: "Ana D. Souder" },
      ],
    },
    {
      id: 9,
      name: "Writing",
      time: "2:30 - 3:00",
      students: [
        { id: 1, name: "David M. Randall" },
        { id: 2, name: "Helen R. Sanchez" },
      ],
    },
  ];

  // const handleSelectedSubject = (data) => {
  //   setSelectedName(data[0]);
  //   setSelectedTime(data[1]);
  //   console.log([data[0], data[1]]);
  // };

  return (
    <>
      <div className="p-4 ml-8">
        <svg
          class="w-6 h-6 text-gray-500 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
          onClick={() => activePage("teacher-list")}
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </div>
      <section className="h-screen p-12 w-full">
        <div className=" h-full flex flex-row justify-evenly gap-6">
          <div className=" w-1/3">
            <div className="">
              <div class="max-w-sm mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  class="w-32 h-32 mt-2 mb-1 rounded-full shadow-lg mx-auto"
                  src={profile}
                  alt="Bonnie image"
                />

                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                      John Doe
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde
                    aspernatur non deserunt
                  </p>
                  <div className="bg-slate-200 h-32 rounded-md p-4">
                    <div className="border-b p-2 border-gray-400 flex flex-row justify-between">
                      <div className="text-gray-500">Status</div>
                      <div className="bg-green-400 rounded-md">
                        <div className="p-1 text-white text-base mx-2">
                          {" "}
                          Active{" "}
                        </div>
                      </div>
                    </div>
                    <div className=" p-2 flex flex-row justify-between">
                      <div className="text-gray-500">Member Since</div>
                      <div className="text-gray-500">December 20, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/3 p-4">
            <div className="gap-4 border rounded-md p-4">
              <div className="mb-4 flex flex-row gap-3">
                <svg
                  class="w-6 h-6 text-gray-600 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
                <div className="font-semibold text-base text-gray-600">
                  About
                </div>
              </div>
              <div class="grid grid-cols-4 gap-2">
                <div className="font-semibold text-gray-600">Firstname</div>
                <div className="text-sm text-gray-500">John</div>
                <div className="font-semibold text-gray-600">Lastname</div>
                <div className="text-sm text-gray-500">Doe</div>

                <div className="font-semibold text-gray-600">Gender</div>
                <div className="text-sm text-gray-500">Male</div>
                <div className="font-semibold text-gray-600">Contact</div>
                <div className="text-sm text-gray-500">+11 998001001</div>

                <div className="font-semibold text-gray-600">
                  Current Address
                </div>
                <div className="text-sm text-gray-500">
                  Beech Creek, PA, Pennsylvania
                </div>
                <div className="font-semibold text-gray-600">
                  Permanant Address
                </div>
                <div className="text-sm text-gray-500">
                  Arlington Heights, IL, Illinois
                </div>

                <div className="font-semibold text-gray-600">Email.</div>
                <div className="text-sm text-gray-500">jane@example.com</div>
                <div className="font-semibold text-gray-600">Birthday</div>
                <div className="text-sm text-gray-500">Feb 06, 1998</div>
              </div>
              <div className="border p-2 text-center text-gray-500 cursor-pointer rounded-md hover:bg-slate-200 mt-4">
                Show Full Information
              </div>
            </div>
            <div className="border mt-6 rounded-md ">
              <div className="font-bold text-center mt-2 text-gray-600">
                Teacher Schedule
              </div>
              <div class="grid grid-cols-9 p-2">
                {data.map((data) => (
                  <div
                    key={data.id}
                    className="border text-center font-bold text-sm p-1 text-red-500"
                  >
                    {data.time}
                  </div>
                ))}

                {data.map((data) => (
                  <div
                    key={data.id}
                    className=" text-center border p-2 flex flex-col justify-between"
                  >
                    <div className="text-sm text-gray-500 mb-4">
                      {" "}
                      {data.name}
                    </div>
                  </div>
                ))}

                {data.map((data) => (
                  <div key={data.id} className="border flex flex-col p-1">
                    <div className="text-gray-600 font-semibold text-sm text-center mb-4">
                      Students
                    </div>
                    {data.students.map((student) => (
                      <div className="text-gray-500 text-xs">
                        {" "}
                        {student.name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherProfile;
