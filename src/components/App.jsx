import { useState } from "react";
import InputForm from "./InputForm";
import Header from "./Header";
import ResumePreview from "./ResumePreview";

function App() {
  const [formData, setFormData] = useState({
    personal: {
      name: "John Doe",
      email: "Johndoe83@gmail.com",
      phone: "1237894560",
    },
    education: {
      college: "Hogwart's University of Magic",
      degree: "Bachelor's of Magic",
      cgpa: "8.9",
      startDate: "2015-01-02",
      endDate: "2019-03-09",
    },
    experience: {
      jobTitle: "Senior Magic Developer",
      company: "Black Hand Organization",
      jobDescription:
        "Worked on various spells like lightning, rage, and invisible potion.",
      startDate: "2020-01-01",
      endDate: "2021-02-01",
    },
    experience2: {
      jobTitle: "Junior Front End Developer",
      company: "Black Hand Organization",
      jobDescription:
        "Worked on various spells like lightning, rage, and invisible potion.",
      startDate: "2022-08-09",
      endDate: "2023-08-09",
    },
    skills: {
      skills: "HTML CSS JavaScript React",
      achievements: "Won a Gold at the Black Hand Championship Rem",
    },
  });

  const [finalData, setFinalData] = useState({
    personal: { name: "", email: "", phone: "" },
    education: {
      college: "",
      degree: "",
      cgpa: "",
      startDate: "",
      endDate: "",
    },
    experience: {
      jobTitle: "",
      company: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
    experience2: {
      jobTitle: "",
      company: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
    skills: { skills: "", achievements: "" },
  });

  // Update finalData from InputForm component
  const updateFinalData = (section, data) => {
    setFinalData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <Header />
        <InputForm
          formData={formData}
          setFormData={setFormData}
          updateFinalData={updateFinalData}
        />
      </div>
      <ResumePreview data={finalData} />
    </div>
  );
}

export default App;