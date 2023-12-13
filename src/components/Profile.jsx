import React from "react";
import imslogo from "../assets/image/imslogo.jpg";
import "flowbite";
const Profile = () => {
  const data = [
    { id: 1, name: "Native 2", time: "8:00 - 8:30" },
    { id: 2, name: "IELTS Listening (Pre IELTS)", time: "8:30 - 9:00" },
    { id: 3, name: "IELTS Integration", time: "9:00 - 9:30" },
    { id: 4, name: "Conversation", time: "9:30 - 10:00" },
    { id: 5, name: "Speaking Beginner", time: "10:00 - 10:30" },
    { id: 6, name: "Native", time: "1:00 - 1:30" },
    { id: 7, name: "Business Integration", time: "1:30 - 2:00" },
    { id: 8, name: "Listening", time: "2:00 - 2:30" },
    { id: 9, name: "Writing", time: "2:30 - 3:00" },
  ];
  return (
    <>
      <section className="h-screen p-12">
        <div className=" h-full flex flex-row justify-evenly gap-6">
          <div className="border w-1/3">
            <div className="">
              <div class="max-w-sm mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={imslogo} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      John Doe
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Owner at Her Company Inc. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Reprehenderit, eligendi
                    dolorum sequi illum qui unde aspernatur non deserunt
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
          <div className="border w-2/3 p-4">
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
            <div className="border mt-6 rounded-md h-80">
              <div class="grid grid-cols-9 p-2">
                {data.map((data) => (
                  <div
                    key={data.id}
                    className="border text-center text-sm p-1 text-gray-500"
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

                    <button
                      data-modal-target="default-modal"
                      data-modal-toggle="default-modal"
                      class="block font-semibold text-sm text-red-400 hover:text-red-500"
                      type="button"
                    >
                      View Details
                    </button>
                    {/* <!-- Main modal --> */}
                    <div
                      id="default-modal"
                      data-modal-backdrop="static"
                      tabindex="-1"
                      aria-hidden="true"
                      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-300 bg-opacity-40"
                    >
                      <div class="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          {/* <!-- Modal header --> */}
                          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Terms of Service
                            </h3>
                            <button
                              type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-hide="default-modal"
                            >
                              <svg
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                              </svg>
                              <span class="sr-only">Close modal</span>
                            </button>
                          </div>
                          {/* <!-- Modal body --> */}
                          <div class="p-4 md:p-5 space-y-4">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              With less than a month to go before the European
                              Union enacts new consumer privacy laws for its
                              citizens, companies around the world are updating
                              their terms of service agreements to comply.
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              The European Union’s General Data Protection
                              Regulation (G.D.P.R.) goes into effect on May 25
                              and is meant to ensure a common set of data rights
                              in the European Union. It requires organizations
                              to notify users as soon as possible of high-risk
                              data breaches that could personally affect them.
                            </p>
                          </div>
                          {/* <!-- Modal footer --> */}
                        </div>
                      </div>
                    </div>
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

export default Profile;
