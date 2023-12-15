import React, { useState } from "react";
import TeacherLists from "./TeacherLists";
import AddTeacher from "./AddTeacher";
import "flowbite";
const Teachers = () => {
  const [section, activeSection] = useState("get-teachers");

  return (
    <>
      {section == "add-teacher" ? (
        <AddTeacher activeSection={activeSection} />
      ) : (
        <TeacherLists activeSection={activeSection} />
      )}
    </>
  );
};

export default Teachers;
